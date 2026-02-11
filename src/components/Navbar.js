import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add a scroll listener to change navbar opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Take Action", path: "/action" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🌍</span>
          <h1 className={`text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-slate-900" : "text-green-800"
          }`}>
            Earth <span className="text-green-600">Awareness</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`text-sm font-semibold transition-all hover:text-green-600 ${
                  location.pathname === link.path 
                  ? "text-green-700 underline underline-offset-8 decoration-2" 
                  : scrolled ? "text-slate-600" : "text-slate-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/action#volunteer-form" className="bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-800 transition-transform active:scale-95 shadow-md">
              Volunteer Now
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-900 hover:bg-slate-100" : "text-green-900"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-2xl">✕</span> // Close Icon
          ) : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-4 h-0.5 bg-current ml-auto"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-300 shadow-xl md:hidden ${
        open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
      }`}>
        <ul className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-800 block hover:text-green-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-slate-100">
            <Link 
              to="/action" 
              onClick={() => setOpen(false)}
              className="w-full block text-center bg-green-700 text-white py-3 rounded-xl font-bold"
            >
              Volunteer Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;