import React from "react";
import { Link } from "react-router-dom"
import classes from "./Topnav.module.css"

const TopNav = () => {
  const NavBarClasses = ["navbar","navbar-expand-lg","navbar-light",classes.TopNav];
  const NavBarLinks = [classes.TopNavText,classes.TopNavLink ];

  return (
    <nav className={ NavBarClasses.join(" ") }>
      <div className="container d-flex justify-content-between">
        <a className={ classes.TopNavText } href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="flex-grow-0 collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className={ "dropdown-toggle " +  NavBarLinks.join(" ")}  href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                account
              </button>
              <ul className={ "dropdown-menu " + classes.TopNavDropdown } aria-labelledby="navbarDropdownMenuLink">
                <li><Link className={ NavBarLinks.join(" ") } to="/">home</Link></li>
                <li><Link className={ NavBarLinks.join(" ") } to="/settings">settings</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
}

export default TopNav
