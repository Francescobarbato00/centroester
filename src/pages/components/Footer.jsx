import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Sezione di Navigazione */}
        <nav className="mb-8">
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
            <li>
              <a 
                href="#"
                className="text-lg no-underline hover:underline transition"
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                href="#"
                className="text-lg no-underline hover:underline transition"
              >
                CHI SIAMO
              </a>
            </li>
            <li>
              <a 
                href="#"
                className="text-lg no-underline hover:underline transition"
              >
                DISCIPLINE
              </a>
            </li>
            <li>
              <a 
                href="#"
                className="text-lg no-underline hover:underline transition"
              >
                TERZO SETTORE
              </a>
            </li>
            <li>
              <a 
                href="#"
                className="text-lg no-underline hover:underline transition"
              >
                TEATRO
              </a>
            </li>
            <li>
              <a 
                href="#"
                className="text-lg no-underline hover:underline transition"
              >
                NEWS
              </a>
            </li>
            <li>
              <a 
                href="#"
                className="text-lg no-underline hover:underline transition"
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
            className="text-black hover:text-black transition" 
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a 
            href="#"
            className="text-black hover:text-black transition" 
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="#"
            className="text-black hover:text-black transition" 
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="#"
            className="text-black hover:text-black transition" 
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-black mb-4"></div>

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
