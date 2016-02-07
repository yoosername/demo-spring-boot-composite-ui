import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import {Dashboard} from '../layout';
import {WelcomePage, Missing404Page, ManagePasswordPage} from '../pages';

import sidenavLinksStoreInstance from '../stores/SidenavLinksStore';

function getStateFromStores() {
    return {
        menuItems: sidenavLinksStoreInstance.getAll()
    };
}

export class DashboardRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = getStateFromStores();
    }

    componentDidMount() {
        sidenavLinksStoreInstance.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        sidenavLinksStoreInstance.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Dashboard}>
                    <IndexRoute component={WelcomePage} />

                    <Route path="password" component={ManagePasswordPage}/>
                    <Route path="*" component={Missing404Page}/>
                    {this.state.menuItems}
                </Route>
            </Router>
        );
    }

    _onChange() {
        this.setState(getStateFromStores());
    }
}