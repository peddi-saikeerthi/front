import React from 'react'
import Pcc1 from "./Pcc1"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pcc2 from "./Pcc2"
import Pcc3 from "./Pcc3"
import Pcc4 from "./Pcc4"
import Dashboard from './Dashboard';
import Graph from './Graph';
const Navigation = () => {
  return (
    <div>
     
	  <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/pcc-1" component={Pcc1}/>
        <Route path="/Pcc-2" component={Pcc2}/>
        <Route path="/Pcc-3" component={Pcc3}/>
        <Route path="/Pcc-4" component={Pcc4}/>
        <Route path="/Graph" component={Graph}/>
      </Switch>
    </Router>
	
    </div>
  )
}

export default Navigation
