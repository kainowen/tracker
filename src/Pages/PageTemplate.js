import React from "react";
//import classes from "./PageTemplate.module.css"

const PageTemplate = (props) => {

  return (
  <div className='container my-3'>
    <h1>{props.title}</h1>
    <div>
    {props.children}
    </div>
  </div>
  )
}

export default PageTemplate
