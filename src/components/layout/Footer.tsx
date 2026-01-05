import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0B1120] text-white pt-24 pb-12 overflow-hidden mt-auto">
            {/* Gradient Divider Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

                    {/* Brand Column - Large */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                <span className="text-2xl font-bold tracking-tight text-white">CleanPro</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Experience the pinnacle of home hygiene. We blend advanced cleaning technology with eco-conscious care to create sanctuaries, not just clean rooms.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 group">
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
                            <ul className="space-y-4">
                                {['Carpet Cleaning', 'Upholstery', 'Area Rugs', 'Commercial'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
                            <ul className="space-y-4">
                                {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Widget */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-400">
                                    <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span>123 Empire Blvd,<br />New York, NY 10001</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-400">
                                    <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span className="text-white font-medium">+1 (800) 123-4567</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">© {currentYear} CleanPro Services Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="text-gray-600 text-sm">Designed for Excellence</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
