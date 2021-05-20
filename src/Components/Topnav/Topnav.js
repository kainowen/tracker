import React from "react";
import '../../App.css';
import { Link } from "react-router-dom"
import classes from "./Topnav.module.css"
import Logo from "../Assets/logo-light-trans.png";
import Avatar from "../Assets/avatar.jpg";

const TopNav = () => {
  const NavBarClasses = ["navbar","navbar-expand-lg","navbar-light","px-0",classes.TopNav];
  const NavBarLinks = [classes.TopNavText,classes.TopNavLink, "px-2" ];
  let HeaderLogo = [classes.HeaderLogo, "mr-2" ]
  let AvatarStyles = [classes.Avatar, "ml-2"]
  HeaderLogo = HeaderLogo.join(" ");
  AvatarStyles = AvatarStyles.join(" ");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
      <div className="container">
          <Link className="navbar-brand align-middle pageTitle mx-0" to="/">
          <img src={Logo} className={HeaderLogo} alt="" />
            Welcome back!
          </Link>

          <div>
          <ul className="nav mx-0">
            <li className="nav-item dropdown">
              <button className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="emphasis">account</span>
                <img id="avatar" src={Avatar} className={AvatarStyles} />
              </button>

              <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <p className="dropdown-item emphasis"> Logged in as: <br /> Kain Owen </p>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item emphasis" href="account.php">my account</a>
                <div className="dropdown-divider"></div>
                <a>
                  <form method="post">
                    <input type ="submit" className="dropdown-item emphasis" name="logout" value="Logout" />
                  </form>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav
