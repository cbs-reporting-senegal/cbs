﻿/*---------------------------------------------------------------------------------------------
 *  This file is an automatically generated ReadModel Proxy
 *  
 *--------------------------------------------------------------------------------------------*/
import { ReadModel } from  '@dolittle/readmodels';

export class CaseReport extends ReadModel
{
    constructor() {
        super();
        this.artifact = {
           id: '893b09bd-5d69-4a05-bc2a-420ba95cd169',
           generation: '1'
        };
        this.received = new Date();
        this.region = '';
        this.healthRiskId = '00000000-0000-0000-0000-000000000000';
        this.healthRiskName = '';
        this.female = 0;
        this.male = 0;
        this.over5 = 0;
        this.under5 = 0;
    }
}