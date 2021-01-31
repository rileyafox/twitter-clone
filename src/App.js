import React from "react";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import './App.css';
import {BrowserRouter as Router,
        Switch,
        Route,
        Redirect
      } from 'react-router-dom';

import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import Post from "./Post";

function App() {
  return (

    <Router>

   
                <div className= "app">
                  <Sidebar />
                  <Switch>

                  
                  <Route exact path= "/" component={PostsList} />
                  <Route exact path= "/username/:id" component={SinglePostPage} />

                  </Switch>
                  <Widgets />
                </div>
    
    </Router>
  )
}
export default App;