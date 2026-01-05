import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">CleanPro</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">
                            Professional cleaning services for your home. We make your spaces
                            sparkle with our expert carpet, sofa, and upholstery cleaning.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5l-4.24-.06C10.81.38,9.89,3.12,9.89,5.62V7.46H7.23v4h2.66V22h4.61V11.42h3.12Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,2.16c3.2,0,3.58.01,4.85.07,1.17.05,1.8.25,2.23.41.56.22.96.48,1.38.9s.68.82.9,1.38c.16.42.36,1.06.41,2.23.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.05,1.17-.25,1.8-.41,2.23-.22.56-.48.96-.9,1.38s-.82.68-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68,1.38-.9c.42-.16,1.06-.36,2.23-.41,1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33.01,7.05.07,5.78.13,4.91.33,4.15.63c-.79.31-1.46.72-2.13,1.38S.94,3.36.63,4.15c-.3.76-.5,1.63-.56,2.9C.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.06,1.27.26,2.14.56,2.9.31.79.72,1.46,1.38,2.13s1.34,1.07,2.13,1.38c.76.3,1.63.5,2.9.56,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c1.27-.06,2.14-.26,2.9-.56.79-.31,1.46-.72,2.13-1.38s1.07-1.34,1.38-2.13c.3-.76.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.9-.31-.79-.72-1.46-1.38-2.13s-1.34-1.07-2.13-1.38c-.76-.3-1.63-.5-2.9-.56C15.67.01,15.26,0,12,0Z" />
                                    <path d="M12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z" />
                                    <circle cx="18.41" cy="5.59" r="1.44" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/carpet-cleaning"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Carpet Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sofa-cleaning"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Sofa Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/upholstery-cleaning"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Upholstery Cleaning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    My Account
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 mt-0.5 text-primary-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>123 Main Street, City, State 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-primary-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+1-555-123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-primary-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>contact@cleanpro.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} CleanPro Services. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
