import logo from '../assets/logo.png'

function Navbar(){
    return(
        <>
  <div className="navbar bg-base-300 shadow-sm ">
    <div className="navbar-start">
      <div className="dropdown">
        <div>
          {/* <img className='h-10' src={logo} alt="logo of the company web crafters" /> */}
          <h2 className='text-2xl font-bold'>WEB Crafters</h2>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ">
          <li><a>Home</a></li>
          {/* <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li> */}
          <li><a className='text-black'>Services</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact Us</a></li>
          <li><a>About Us</a></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 ">
        <li><a>Home</a></li>
        {/* <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li> */}
          <li><a >Services</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact Us</a></li>
          <li><a>About Us</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Book a call</a>
    </div>
  </div>
  
    </>
    )
}

export default Navbar