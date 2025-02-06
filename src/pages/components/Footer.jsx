import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Sezione di Navigazione */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center space-x-8">
            <li>
              <a 
                href="#" 
                className="text-lg hover:text-white transition hover:underline"
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-lg hover:text-white transition hover:underline"
              >
                CHI SIAMO
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-lg hover:text-white transition hover:underline"
              >
                DISCIPLINE
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-lg hover:text-white transition hover:underline"
              >
                TERZO SETTORE
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-lg hover:text-white transition hover:underline"
              >
                TEATRO
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-lg hover:text-white transition hover:underline"
              >
                NEWS
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-lg hover:text-white transition hover:underline"
              >
                CONTATTI
              </a>
            </li>
          </ul>
        </nav>

        {/* Icone Social */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="#"
            className="hover:text-white transition" 
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a 
            href="#"
            className="hover:text-white transition" 
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="#"
            className="hover:text-white transition" 
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="#"
            className="hover:text-white transition" 
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-4"></div>

        {/* Informazioni di Copyright */}
        <div className="text-center text-sm">
          <p>
            © 2025 — Powered by Ing. Francesco Barbato — Tutti i diritti sono riservati - P.IVA IT08994991217
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
