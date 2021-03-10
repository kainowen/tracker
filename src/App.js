import classes from './App.module.css';
//import firebase from 'firebase/firebase';
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Train from "./Pages/Train/Train";
import Progress from "./Pages/Progress/Progress";
import Learn from "./Pages/Learn/Learn";
import Settings from "./Pages/Settings/Settings";


import TopNav from "./Components/Topnav/Topnav";
import BottomNav from "./Components/BottomNav/BottomNav";

function App() {
  return (
    <div className={classes.Body}>
    <BrowserRouter>
      <Route path="/"> <TopNav /> </Route>
        <Route path="/" exact ><Home /></Route>
        <Route path="/train"><Train /></Route>
        <Route path="/progress"><Progress /></Route>
        <Route path="/learn"><Learn /></Route>
        <Route path="/settings"><Settings /></Route>
      <Route path="/"> <BottomNav /> </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
