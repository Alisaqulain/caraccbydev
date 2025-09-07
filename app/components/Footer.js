import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <img src="./car.png" alt="logo" className="w-38 h-20" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your premier destination for premium car accessories and
              modifications. We specialize in high-quality parts that enhance
              your vehicle&#39;s performance and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/franchise"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Franchise
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Exterior
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Interior
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Wheels & Tires
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>The Accessory Center</p>
              <p>Sadaat Hostel, Arya Samaj Road, Muzaffarnagar</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:7456886910"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  7456886910
                </a>
                ,{" "}
                <a
                  href="tel:9045030110"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  9045030110
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:shazizaidi52058@gmail.com"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  shazizaidi52058@gmail.com
                </a>
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/the_accessory_center_mzn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors text-xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Developed by{" "}
            <a
              href="https://devspheresolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              DevSphere Solutions
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
