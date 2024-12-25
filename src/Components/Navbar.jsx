// import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#0C1C26] shadow-md py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Exploro Trivia</div>

        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="#home"
            className="text-gray-200 hover:text-yellow-400 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-200 hover:text-yellow-400 font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-200 hover:text-yellow-400 font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-200 hover:text-yellow-400 font-medium"
          >
            Contact
          </a>
        </div>
        <div>
          {/* Button */}

          <button className="btn">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
