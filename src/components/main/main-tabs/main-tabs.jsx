import React, { Component } from 'react';
import './main-tabs.css';
import Airport from './airport/airport';
import Services from './services/services';
import Hotels from './hotels/hotels';
import Catering from './catering/catering';
import MainNotFound from '../main-not-found/main-not-found';
import { BrowserRouter as Router, Switch, Route, Link, NavLink , Redirect} from 'react-router-dom';


class MainTabs extends Component {
  render() {
    return (
      <div>
        {/* Add tabs here for hotel services and catering */}
        Tabs are here
         <Switch>
          <Route path="/main/:icao/view/airport" component={Airport} exact ></Route>
          <Route path="/main/:icao/view/catering" component={Catering} exact ></Route>
          <Route path="/main/:icao/view/hotels" component={Hotels} exact ></Route>
          <Route path="/main/:icao/view/services" component={Services} exact ></Route>
          <Redirect from="/main/:icao/view/" to="/main/:icao/view/airport" ></Redirect> 
          {/* <Route component={MainNotFound} ></Route> */}
        </Switch>
      </div>
    );
  }
}

export default MainTabs;
