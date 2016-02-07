import React from 'react';
import ReactDOM from 'react-dom';

import MiniRouter from './router/MiniRouter';

import {Dashboard} from './layout';
import {Missing404Page, HomePage,ManagePasswordPage} from './pages';

import DashboardPageActions from './actions/DashboardPageActions';

// Render the Dashboard App
ReactDOM.render((
    <Dashboard />
), document.getElementById("app"));


// Add some base dashboard routes & start listening
MiniRouter
    .add(function() {
        console.log('Home page selected for index route');
        DashboardPageActions.setCurrentPage((<HomePage />));
    })
    .add('*', function(path) {
        console.log('Missing page selected for missing route: ' + path);
        DashboardPageActions.setCurrentPage((<Missing404Page path={path}/>));
    })
    .add('password', function(path) {
        console.log('Manage Password page selected');
        DashboardPageActions.setCurrentPage((<ManagePasswordPage />));
    })
    .listen();

window.MiniRouter = MiniRouter;
window.DashboardPageActions = DashboardPageActions;


