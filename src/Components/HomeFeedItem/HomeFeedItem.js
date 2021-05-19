import React from "react";
import classes from "./HomeFeedItem.module.css"

const HomeFeedItem = (props) => {

  return (
    <div className={classes.HomeFeedItem}>
      <p className={classes.HomeFeedItemHeader}> {props.title} </p>
      <p>This is a notification</p>
      <p className={classes.HomeFeedItemDateTime}>{props.dateTime}</p>
    </div>
  )
}

export default HomeFeedItem;
