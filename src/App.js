import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
   

    
    <div className= "app">
      <Sidebar />

      <Feed />

      <Widgets />
    </div>
    
  )
}
export default App;