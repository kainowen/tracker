import './App.css';
import firebase from 'firebase/firebase';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App" />
      <Route path="/1"> <h1> Hello </h1> </Route>
      <Route path="/2"> <h1> Goodbye </h1> </Route>
    </BrowserRouter>
  );
}

export default App;
