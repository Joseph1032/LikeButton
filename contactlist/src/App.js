import React from 'react';
import PeopleList from './Components/PeopleList.js'
import Person from './Components/Person.js'
import List from './List.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default React.createClass({
  render() {
    return ( 
        <Router>
        <div className="container">
            <Route exact={true} path="/" component={PeopleList} />
            <Route path="/person/:personId" component={Person} />
        </div>
        </Router>
        )
    }
})
    

 