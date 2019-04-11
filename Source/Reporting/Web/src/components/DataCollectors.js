import React, { Component } from "react";
import { Link } from "react-router-dom";


import {QueryCoordinator} from '@dolittle/queries';
import {CommandCoordinator} from '@dolittle/commands';
import { AllDataCollectors } from "../app/Management/DataCollectors/AllDataCollectors";
import { DataCollector } from "../app/Management/DataCollectors/DataCollector";

import { commandCoordinator, queryCoordinator } from '../../coordinators';

class DataCollectors extends Component {
    /**
     * @type {CommandCoordinator}
     *
     * @memberof Reporting
     */
    get commandCoordinator() {return commandCoordinator}
    /**
     *
     * @type {QueryCoordinator}
     * @memberof Reporting
     */
    get queryCoordinator() {return queryCoordinator};
    /**
     * @type {DataCollector[]}
     * @memberof Reporting
     */
    dataCollectors = [];
    constructor(props) {
        super(props);
        this.queryCoordinator.execute(new AllDataCollectors()).then(_ => {
            this.dataCollectors = _.items; 
            console.log(this.dataCollectors);
        });

    }
    render() {
        return (
            <div className="data-collectors--container">
                <h1>Here is where the data collectors live!</h1>
                <Link to="/register-datacollector">Add data collectors</Link>
            </div>
        );
    }
}

export default DataCollectors;
