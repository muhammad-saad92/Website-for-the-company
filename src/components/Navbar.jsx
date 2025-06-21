import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <div className="bg-base-300 sticky top-0 z-50">
      <div className="navbar max-w-6xl mx-auto shadow-sm px-4">

        {/* Left: Site Name */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold">WEB Crafters</Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li>
              <ScrollLink to="services" smooth={true} duration={800} offset={-80} className="cursor-pointer">
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="portfolio" smooth={true} duration={800} offset={-80} className="cursor-pointer">
                Portfolio
              </ScrollLink>
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Right: Call-to-action + Hamburger */}
        <div className="navbar-end">
        <Link
          to="/contact"
          className="btn btn-primary hidden lg:flex items-center justify-center h-12 normal-case text-base"
        >
          Book a call
        </Link>


          {/* Hamburger Menu (Mobile Only) */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to="/">Home</Link></li>
              <li>
                <ScrollLink to="services" smooth={true} duration={800} offset={-80} className="cursor-pointer">
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="portfolio" smooth={true} duration={800} offset={-80} className="cursor-pointer">
                  Portfolio
                </ScrollLink>
              </li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
