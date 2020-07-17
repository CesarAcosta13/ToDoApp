import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Notelist from './components/Notelist'
import Createnote  from './components/Createnote'
import Createuser from './components/Createuser'
import './app.css';


function App() {
  return (
    <Router>
      <Navigation/>
       <div className="container p-4">
       <Route path="/" exact component={Notelist} />
        <Route path="/edit/:id" component={Createnote} />
        <Route path="/create" component={Createnote} />
        <Route path="/user" component={Createuser} />

       </div>
    </Router>
  );
}

export default App;
