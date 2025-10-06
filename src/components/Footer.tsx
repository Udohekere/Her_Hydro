import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.jpeg" alt="Her_Hydro Logo" className="h-12 w-12 object-contain" />
              <span className="ml-3 text-xl font-bold text-cyan-400">HER_HYDRO</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advocating for Clean Water, Healthy Ecosystems, and Sustainable Communities
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  No. 8 Ugwogo Close, Ekochin Old Airport Rd, Enugu, Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                <a href="mailto:herhydro@gmail.com" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  herhydro@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                <a href="tel:+2348076576224" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  +234-807-657-6224
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/her_hydro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  @her_hydro
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Our Mission</h3>
            <p className="text-sm text-gray-400">
              To improve access to clean water and preserve aquatic and terrestrial ecosystems through community education, habitat restoration, and advocacy.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Her_Hydro. All rights reserved. | Established 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
