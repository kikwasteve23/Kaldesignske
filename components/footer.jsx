"use client"
import React from 'react';
import { Github, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-6">KALDESIGNS</h3>
            <p className="text-gray-400 mb-6">
              Transforming data into powerful insights to help businesses make informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/kikwasteve23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Data Analysis</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Machine Learning</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Data Visualization</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Statistical Modeling</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Intelligence</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  399, Ruiru-Kiambu Road,<br />
                  Kiambu, 00232, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                <a href="tel:+254715135503" className="text-gray-400 hover:text-white transition-colors">
                  +254 745 751 939
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                <a href="mailto:Stevenkikwa@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Stevenkikwa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} KALDESIGNS. All rights reserved.
          </div>
          
          <div className="text-gray-400 text-sm">
            Designed & Developed by <span className="text-sky-500">Kaldesigns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;