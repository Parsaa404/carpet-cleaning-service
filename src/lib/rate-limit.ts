// Simple in-memory rate limiter for API protection
// In production, consider using Redis for distributed rate limiting

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

interface RateLimitConfig {
    maxRequests: number;
    windowMs: number;
}

// Clean up expired entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
        if (entry.resetTime < now) {
            rateLimitStore.delete(key);
        }
    }
}, 60000); // Clean up every minute

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (IP address, user ID, etc.)
 * @param config - Rate limit configuration
 * @returns Object with success status and remaining attempts
 */
export function rateLimit(
    identifier: string,
    config: RateLimitConfig
): { success: boolean; remaining: number; resetIn: number } {
    const now = Date.now();
    const key = identifier;

    const entry = rateLimitStore.get(key);

    if (!entry || entry.resetTime < now) {
        // Create new entry or reset expired one
        rateLimitStore.set(key, {
            count: 1,
            resetTime: now + config.windowMs,
        });
        return {
            success: true,
            remaining: config.maxRequests - 1,
            resetIn: config.windowMs,
        };
    }

    if (entry.count >= config.maxRequests) {
        // Rate limit exceeded
        return {
            success: false,
            remaining: 0,
            resetIn: entry.resetTime - now,
        };
    }

    // Increment counter
    entry.count++;
    return {
        success: true,
        remaining: config.maxRequests - entry.count,
        resetIn: entry.resetTime - now,
    };
}

// Predefined rate limit configurations
export const RATE_LIMITS = {
    // Auth endpoints: 5 attempts per 15 minutes
    auth: {
        maxRequests: 5,
        windowMs: 15 * 60 * 1000,
    },
    // Form submissions: 10 per minute
    form: {
        maxRequests: 10,
        windowMs: 60 * 1000,
    },
    // General API: 100 per minute
    api: {
        maxRequests: 100,
        windowMs: 60 * 1000,
    },
} as const;

/**
 * Get client IP from request headers
 */
export function getClientIp(request: Request): string {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
        return forwarded.split(",")[0].trim();
    }

    const realIp = request.headers.get("x-real-ip");
    if (realIp) {
        return realIp;
    }

    // Fallback for development
    return "127.0.0.1";
}

/**
 * Rate limit helper that returns a Response if rate limited
 */
export function checkRateLimit(
    request: Request,
    config: RateLimitConfig = RATE_LIMITS.api
): Response | null {
    const ip = getClientIp(request);
    const result = rateLimit(ip, config);

    if (!result.success) {
        return new Response(
            JSON.stringify({
                error: "Too many requests",
                message: "Please try again later",
                resetIn: Math.ceil(result.resetIn / 1000),
            }),
            {
                status: 429,
                headers: {
                    "Content-Type": "application/json",
                    "Retry-After": String(Math.ceil(result.resetIn / 1000)),
                    "X-RateLimit-Remaining": "0",
                    "X-RateLimit-Reset": String(Math.ceil(result.resetIn / 1000)),
                },
            }
        );
    }

    return null;
}
