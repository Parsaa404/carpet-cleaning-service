import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Carpet, Sofa & Upholstery Cleaning",
  description:
    "Transform your home with our professional cleaning services. Expert carpet, sofa, and upholstery cleaning with eco-friendly products and guaranteed satisfaction.",
};

// Service card data
const services = [
  {
    title: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description:
      "Deep cleaning that removes dirt, stains, and allergens from your carpets.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    price: "From $99",
  },
  {
    title: "Sofa Cleaning",
    slug: "sofa-cleaning",
    description:
      "Restore your sofas to their original beauty with our deep cleaning service.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    price: "From $79",
  },
  {
    title: "Upholstery Cleaning",
    slug: "upholstery-cleaning",
    description:
      "Complete cleaning for all your upholstered furniture and fabrics.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    price: "From $59",
  },
];

// Trust indicators
const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

// Benefits list
const benefits = [
  {
    title: "Eco-Friendly Products",
    description: "Safe for your family, pets, and the environment.",
  },
  {
    title: "Trained Professionals",
    description: "Certified technicians with years of experience.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll re-clean for free.",
  },
  {
    title: "Flexible Scheduling",
    description: "Book online anytime, services 7 days a week.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 rounded-l-full blur-3xl -z-10 translate-x-1/4"></div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide uppercase">#1 Rated Cleaning Service</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight">
                Experience the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Purest Clean
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Professional carpet, sofa, and upholstery cleaning tailored for your home.
                We bring life back to your fabrics with eco-friendly solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Book Appointment
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 transition-all bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fully Insured
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Eco-Friendly
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Satisfaction Guaranteed
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative mt-12 lg:mt-0 animate-float hidden md:block">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="relative glass-panel p-8 rounded-3xl border border-white/50 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    {/* Floating Card 1: Carpet */}
                    <div className="rounded-2xl bg-white p-4 shadow-lg transform transition hover:scale-105 border border-gray-50 flex flex-col items-center text-center">
                      <div className="w-12 h-12 mb-3 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                      </div>
                      <div className="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                    </div>
                    {/* Floating Card 2: Sofa - Larger */}
                    <div className="rounded-2xl bg-blue-600 p-5 shadow-xl transform transition hover:scale-105 border border-blue-500 text-white flex flex-col items-center text-center h-48 justify-center">
                      <div className="w-16 h-16 mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                      </div>
                      <p className="font-bold text-lg mb-1">Premium</p>
                      <p className="text-blue-100 text-sm">Sofa Cleaning</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-8">
                    {/* Floating Card 3: Satisfaction */}
                    <div className="rounded-2xl bg-white p-4 shadow-lg transform transition hover:scale-105 border border-gray-50 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Rating</p>
                        <p className="text-gray-900 font-bold">4.9/5.0</p>
                      </div>
                    </div>
                    {/* Floating Card 4: Upholstery */}
                    <div className="rounded-2xl bg-gray-50 p-4 shadow-lg transform transition hover:scale-105 border border-gray-100 h-40 flex flex-col justify-end relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 mb-3 bg-white rounded-lg shadow-sm flex items-center justify-center text-purple-600">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <p className="font-bold text-gray-900">Upholstery</p>
                        <p className="text-xs text-gray-500">Expert Care</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600">
              We specialize in deep cleaning for all types of fabrics and surfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Carpet Cleaning",
                desc: "Remove deep-seated dirt and allergens with our hot water extraction method.",
                icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
                href: "/carpet-cleaning",
                color: "blue"
              },
              {
                title: "Sofa Cleaning",
                desc: "Restore the beauty of your living room furniture with specialized fabric care.",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                href: "/sofa-cleaning",
                color: "indigo"
              },
              {
                title: "Upholstery",
                desc: "Gentle cleaning for delicate fabrics, curtains, and dining chairs.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                href: "/upholstery-cleaning",
                color: "teal"
              }
            ].map((service, i) => (
              <div key={i} className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500`}></div>
                <div className={`w-14 h-14 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-${service.color}-600 transition-colors duration-300`}>
                  <svg className={`w-8 h-8 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{service.desc}</p>
                <Link href={service.href} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 relative z-10 group/link">
                  Learn More
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle text-left">Why Choose Us</p>
              <h2 className="section-title text-left">
                Trusted by Thousands of Happy Customers
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We combine expertise, quality products, and exceptional service
                to deliver cleaning results that exceed expectations.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-4">🏆</p>
                  <p className="text-primary-800 font-bold text-xl">Award-Winning Service</p>
                  <p className="text-primary-600">Best Cleaning Company 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

        {/* Decorative Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Book your professional cleaning service today and experience the difference of a verified touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-blue-700 font-bold rounded-xl shadow-2xl hover:bg-gray-50 hover:shadow-xl hover:scale-105 transform transition-all duration-300 ring-4 ring-white/30"
            >
              Book Now - Get a Quote
            </Link>
          </div>
        </div>

        {/* Wave Separator - Transition to Dark Footer */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-950"></path>
          </svg>
        </div>
      </section>
    </>
  );
}

