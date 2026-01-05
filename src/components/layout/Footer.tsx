import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container relative z-10 py-16 lg:py-24 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
                                <svg
                                    className="w-7 h-7 text-white"
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
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">CleanPro</span>
                        </Link>
                        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
                            Professional cleaning services that transform your home.
                            We combine eco-friendly products with expert care to deliver
                            outstanding results every time.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-blue-900/30 border border-gray-800 hover:border-blue-500"
                                    aria-label={`Follow us on ${social}`}
                                >
                                    <span className="capitalize sr-only">{social}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" className="opacity-0" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Carpet Cleaning', href: '/carpet-cleaning' },
                                { name: 'Sofa Cleaning', href: '/sofa-cleaning' },
                                { name: 'Upholstery Care', href: '/upholstery-cleaning' },
                                { name: 'Stain Removal', href: '/services/stain-removal' },
                                { name: 'Commercial Cleaning', href: '/services/commercial' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Careers', href: '/careers' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Privacy Policy', href: '/privacy' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/50 transition-colors">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Visit us at:</p>
                                    <p className="text-white font-medium mt-1">123 Cleaning Blvd, Suite 100<br />New York, NY 10001</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/50 transition-colors">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Call us today:</p>
                                    <p className="text-white font-medium mt-1 hover:text-blue-400 transition-colors cursor-pointer">+1 (555) 123-4567</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 relative z-10">
                <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} CleanPro Services. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm font-medium text-gray-500">
                        <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
                        <Link href="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
