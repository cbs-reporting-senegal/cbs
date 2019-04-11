import { MockCommandCoordinator } from "./mocking/MockCommandCoordinator";
import { MockQueryCoordinator } from "./mocking/MockQueryCoordinator";
import {CommandCoordinator} from '@dolittle/commands'
import {QueryCoordinator} from '@dolittle/queries'

let _commandCoordinator;
let _queryCoordinator
if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    _commandCoordinator = new MockCommandCoordinator();
    _queryCoordinator = new MockQueryCoordinator();
}
else {
    _commandCoordinator = new CommandCoordinator();
    _queryCoordinator = new QueryCoordinator();
}

export const commandCoordinator = _commandCoordinator;
export const queryCoordinator = _queryCoordinator;