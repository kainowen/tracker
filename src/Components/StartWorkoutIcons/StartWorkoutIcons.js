import React from "react";
import { Link } from "react-router-dom"
import classes from "./StartWorkoutIcons.module.css"

const StartWorkoutIcons = (props) => {
  const StartWorkoutIconsStyles = ["btn font-weight-bold bg-white m-3", classes.selectButton, classes.planSelect, classes.selectButtonActive]
  const url =  props.target;

  return (
    <Link to={url}>
      <button id="planSelectBeginner" type="button" className={StartWorkoutIconsStyles.join(" ")}>
        <i className={["fas fa-dumbbell emphasis my-4",classes.Emphasis].join(" ")} style={{fontSize:"30px"}} > </i><br />
        <span> { props.workoutTitle } </span>
        <input className="d-none" type="checkbox" name="planSelect" value="beginner" defaultChecked />
      </button>
    </Link>);
}

export default StartWorkoutIcons;
