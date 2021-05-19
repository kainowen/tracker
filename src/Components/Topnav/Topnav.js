import React from "react";
import '../../App.css';
import { Link } from "react-router-dom"
import classes from "./Topnav.module.css"

const TopNav = () => {
  const NavBarClasses = ["navbar","navbar-expand-lg","navbar-light","px-0",classes.TopNav];
  const NavBarLinks = [classes.TopNavText,classes.TopNavLink, "px-2" ];

  return (
    <nav className={ NavBarClasses.join(" ") }>
      <div className="container d-flex justify-content-between">
        <a className={ classes.TopNavText } href="/">Navbar</a>

        <div className={"flex-grow-0 " + classes.TopNavText} id="navbarNavDropdown">
          <ul className="navbar-nav" >
            <li className="nav-item dropdown" >
              <button className={ "dropdown-toggle " +  NavBarLinks.join(" ")}  href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                account
              </button>
              <ul className={"dropdown-menu " + classes.TopNavDropdown } aria-labelledby="navbarDropdownMenuLink">
              <p class="dropdown-item emphasis"> Logged in as: <br /> User </p>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item emphasis" href="account.php">my account</a>
              <div class="dropdown-divider"></div>
              <a>
                <form method="post">
                  <input type ="submit" class="dropdown-item emphasis" name="logout" value="Logout" />
                </form>
              </a>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default TopNav
