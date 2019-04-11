import React, { Component } from "react";


import { commandCoordinator, queryCoordinator } from '../../coordinators';
import { AllCaseReportsForListing } from "../app/Reporting/CaseReportsForListing/AllCaseReportsForListing";

class CaseReports extends Component {
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

    caseReports = [];
    constructor(props) {
        super(props);

        this.queryCoordinator.execute(new AllCaseReportsForListing()).then(_ => {
            this.caseReports = _.items; 
            console.log(this.caseReports);
        });
    }
    render() {
        return (
            <div className="case-reports--container">
                Here is where the case reports live!
            </div>
        );
    }
}

export default CaseReports;
