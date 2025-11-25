import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className="w-full px-6 py-4 flex justify-around items-center
      bg-white text-black
      dark:bg-gradient-to-r dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white
      shadow-md sticky top-0 z-50 transition-colors duration-300"
    >
      {/* Left Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold">
          P
        </div>
        Portfolio
      </div>

      {/* Center Navigation - Desktop */}
      <div className="hidden md:flex space-x-6 font-medium">
        <NavLink to="/" className="hover:text-green-400">
          Home
        </NavLink>
          <NavLink to="/skills" className="hover:text-green-400">
          Skills
        </NavLink>
        <NavLink to="/projects" className="hover:text-green-400">
          Projects
        </NavLink>
        <NavLink to="/education" className="hover:text-green-400">
          Education
        </NavLink>
        <NavLink to="/certificates" className="hover:text-green-400">
          certificates
        </NavLink>
        <NavLink to="/contact" className="hover:text-green-400">
          Contact
        </NavLink>
      
      </div>

      {/* Right Actions - Theme Toggle (Visible in all views) */}
      <div className="flex items-center gap-4 px-3 py-1 rounded-full bg-black/20 dark:bg-white/20 border border-white dark:border-gray-300 hover:shadow-[0_0_10px_#00f] transition">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
{menuOpen && (
  <div
    className="absolute top-[72px] left-0 w-full 
  bg-white text-black
  dark:bg-gradient-to-r dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white
  shadow-md 
  flex flex-col items-center gap-4 py-4 md:hidden z-40 transition-colors duration-300"
  >
    <NavLink to="/" onClick={toggleMenu} className="hover:text-green-400">
      Home
    </NavLink>
    <NavLink
      to="/skills"
      onClick={toggleMenu}
      className="hover:text-green-400"
    >
      Skills
    </NavLink>
    <NavLink
      to="/projects"
      onClick={toggleMenu}
      className="hover:text-green-400"
    >
      Projects
    </NavLink>
    
    <NavLink
      to="/education"
      onClick={toggleMenu}
      className="hover:text-green-400"
    >
      Education
    </NavLink>
    <NavLink
      to="/certificates"
      onClick={toggleMenu}
      className="hover:text-green-400"
    >
      Certificates
    </NavLink>
    <NavLink
      to="/contact"
      onClick={toggleMenu}
      className="hover:text-green-400"
    >
      Contact
    </NavLink>
    
  </div>
)}

    </nav>
  );
};

export default Navbar;
