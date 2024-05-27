"use client"
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="logo">Logo tbd</div>
            <ul className="nav-links">
                <li className="nav-item">
                <a href="https://github.com/gilcx" target="_blank" >
                <img src={"/images/github-icon.png"} alt="GitHub" style={{ width: '55px', height: '55px', marginTop: '40px'}} />
                </a>
                </li>
                <li className="nav-item">
                <a href="https://www.linkedin.com/in/gilc/" target="_blank">
                <img src={"/images/linkedin-icon.webp"} alt="GitHub" style={{ width: '55px', height: '55px', marginTop: '40px', marginRight: '20px'}}/>
                </a>
                </li>
            </ul>
        </nav>
      );
};

export default Navbar;
