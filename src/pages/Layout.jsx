

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  const navigationItemsHe = [
    { name: "ראשי", href: "#home-he" },
    { name: "אודות", href: "#about-he" },
    { name: "שירותים", href: "#services-he" },
    { name: "פורטפוליו", href: "#portfolio-he" },
    { name: "מאמרים", href: "#articles-he" },
    { name: "צרו קשר", href: "#contact-he" },
  ];

  const isHebrew = currentPageName === "Home-he";
  const navItems = isHebrew ? navigationItemsHe : navigationItems;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3157f5aa8_logo25.png" 
                alt="Amir Nehari Leadership" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to={createPageUrl(isHebrew ? "Home" : "Home-he")} className="text-sm font-medium text-slate-500 hover:text-red-600">
                {isHebrew ? "English" : "עברית"}
              </Link>
              <div className="w-px h-5 bg-slate-300"></div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 hover:text-red-600 transition-colors duration-200 font-medium text-sm tracking-wide"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection(isHebrew ? "#contact-he" : "#contact")}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg text-sm"
              >
                {isHebrew ? "תיאום פגישה" : "Book Consultation"}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-red-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 ${isHebrew ? 'text-right' : 'text-left'}`}>
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-3 py-2 text-slate-700 hover:text-red-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={() => scrollToSection(isHebrew ? "#contact-he" : "#contact")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-full font-medium"
                >
                  {isHebrew ? "תיאום פגישה" : "Book Consultation"}
                </Button>
              </div>
               <div className="pt-4 border-t mt-4">
                 <Link to={createPageUrl(isHebrew ? "Home" : "Home-he")} className="block w-full px-3 py-2 text-slate-500 hover:text-red-600 font-medium">
                    {isHebrew ? "Switch to English" : "עבור לעברית"}
                 </Link>
               </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3157f5aa8_logo25.png" 
                alt="Amir Nehari Leadership" 
                className="h-16 w-auto mb-6"
              />
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                Expert leadership training and organizational development for businesses ready to transform their culture and performance.
              </p>
              <div className="mt-6">
                <p className="text-slate-200 font-medium">www.amirnehari.com</p>
              </div>
              <div className="flex gap-4 mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-blue-600 text-blue-400 hover:bg-blue-800 hover:border-blue-500"
                  onClick={() => window.open("https://www.facebook.com/profile.php?id=100063473203537", '_blank')}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-blue-600 text-blue-400 hover:bg-blue-800 hover:border-blue-500"
                  onClick={() => window.open("https://www.linkedin.com/in/%D7%93%D7%A8-%D7%A2%D7%9E%D7%99%D7%A8-%D7%A0%D7%94%D7%A8%D7%99-amir-nehari-phd/", '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a 
                    href="mailto:drnehari@post.bgu.ac.il"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    drnehari@post.bgu.ac.il
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:0546248278"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    054-6248278
                  </a>
                </li>
                <li>Tel Aviv, Israel</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3157f5aa8_logo25.png" 
                alt="Amir Nehari Leadership" 
                className="h-12 w-auto opacity-60"
              />
            </div>
            <p className="text-slate-400">&copy; 2024 Amir Nehari, PhD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

