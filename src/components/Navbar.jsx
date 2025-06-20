import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
function Navbar(){
    return(
        <>
        <div className=' bg-base-300'>
          <div className="navbar  shadow-sm max-w-6xl mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div>
                  {/* <img className='h-10' src={logo} alt="logo of the company web crafters" /> */}
                  <h2 className='text-2xl font-bold'><Link to='/'>WEB Crafters</Link></h2>
                </div>
                {/* <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ">
                  <li><Link>Home</Link></li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>
                  <li><a className='text-black'>Services</a></li>
                  <li><a>Portfolio</a></li>
                  <li><a>Contact Us</a></li>
                  <li><a>About Us</a></li>
                </ul> */}
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">
                <li><Link to = '/'>Home</Link></li>
                  <li><ScrollLink
                    to="services"
                    smooth={true}
                    duration={800}
                    offset={-80} // adjust for navbar height if needed
                    className="cursor-pointer"
                  >Services
                  </ScrollLink></li>
                  <li><ScrollLink
                    to="portfolio"
                    smooth={true}
                    duration={800}
                    offset={-80} // adjust for navbar height if needed
                    className="cursor-pointer"
                  >Portfolio
                  </ScrollLink></li>
                  <li><Link to = '/contact'>Contact Us</Link></li>
                  <li><Link to = '/about'>About Us</Link></li>
              </ul>
            </div>
            <div className="navbar-end">
              <Link to='/contact' className="btn">Book a call</Link>
            </div>
          </div>
          </div>
    </>
    )
}

export default Navbar