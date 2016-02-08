import React from 'react';
import ReactDOM from 'react-dom';

import MiniRouter from './router/MiniRouter';

import {Dashboard} from './layout';
import {Missing404Page, HomePage,ManagePasswordPage} from './pages';

import DashboardPageActions from './actions/DashboardPageActions';
import DashboardMenuActions from './actions/DashboardMenuActions';
import DebugListener from './stores/DebugListener';

import {Section} from './components/Navigation';

// Render the Dashboard App
ReactDOM.render((
    <Dashboard />
), document.getElementById("app"));


//TODO Possibly nicer syntax...
//DashboardPageActions
//    .addRoute(<HomePage />)
//    .addRoute('*', <Missing404Page />)
//    .addRoute('password', <ManagePasswordPage />);

// Add some default dashboard routes & start listening
MiniRouter
    .add(function() {
        DashboardPageActions.setCurrentPage((<HomePage />));
    })
    .add('*', function(path) {
        DashboardPageActions.setCurrentPage((<Missing404Page path={path}/>));
    })
    .add('password', function(path) {
        DashboardPageActions.setCurrentPage((<ManagePasswordPage />));
    })
    .listen();

// Add some default Menu Items
DashboardMenuActions.addMenuItem(<Section key="test" to="test" icon="fa fa-dashboard fa-fw">Test</Section>);


// Expose a global for other page bundles to reuse
window.Dash, window.parent.window.Dash = {
    go : MiniRouter.navigate,
    router: MiniRouter,
    actions: {
        page: DashboardPageActions,
        menu: DashboardMenuActions
    },
    pages : {
        home : (<HomePage />),
        password : (<ManagePasswordPage />)
    },
    debug : DebugListener
}

// Require css bundle
//var css = require('../css/dashboard.css');