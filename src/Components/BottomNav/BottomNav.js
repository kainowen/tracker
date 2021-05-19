import React from "react";
import { Link } from "react-router-dom"
import classes from "./BottomNav.module.css"

const BottomNav = () => {
  const BottomNavBarClasses = [classes.BottomNavBarClasses];
  const BottomNavInner = ["container px-0", classes.BottomNavInner]

  return (
    <nav className={ BottomNavBarClasses.join(" ") } >
      <div className={ BottomNavInner.join(" ") } >
        <Link className={ classes.BottomNavLink } to="/">
          <div className={ classes.Icons } ><i className="fas fa-home" style={{fontSize:"2em"}} ></i></div>
          <p className={classes.Label}>home</p>
        </Link>
        <Link className={ classes.BottomNavLink } to="/train/select_phase">
          <div className={ classes.Icons }><i className="fas fa-dumbbell" style={{fontSize:"2em"}}></i></div>
          <p className={classes.Label}>train</p>
        </Link>
        <Link className={ classes.BottomNavLink } to="progress" >
          <div className={ classes.Icons }><i className="fas fa-chart-line" style={{fontSize:"2em"}}></i></div>
          <p className={classes.Label}>progress</p>
         </Link>
        <Link className={ classes.BottomNavLink } to="learn">
          <div className={ classes.Icons }><i className="fas fa-glasses" style={{fontSize:"2em"}}></i></div>
          <p className={classes.Label}>learn</p>
        </Link>
      </div>
    </nav>);
}

export default BottomNav
