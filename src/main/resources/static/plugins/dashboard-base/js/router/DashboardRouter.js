import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import {Dashboard} from '../layout';
import {WelcomePage, Missing404Page} from '../pages';

export class DashboardRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Dashboard}>
                    <IndexRoute component={WelcomePage} />

                    <Route path="*" component={Missing404Page}/>
                </Route>
            </Router>
        );
    }
}