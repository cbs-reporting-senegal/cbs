import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CaseReports from '../components/CaseReports';
import DataCollectors from '../components/DataCollectors';

import "../assets/react-leaflet.scss";
import "../assets/main.scss";

function App() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/casereports">Case reports</Link>
            </li>
            <li>
              <Link to="/datacollectors">Data Collectors</Link>
            </li>
          </ul>
  
          <hr />
          <Route path="/casereports" component={CaseReports} />
          <Route path="/datacollectors" component={DataCollectors} />
        </div>
      </Router>
    );
  }

  function Home() {
    return (
      <div>
        <h1>Welcome to Reporting!</h1>
      </div>
    );
  }

  export default App;

