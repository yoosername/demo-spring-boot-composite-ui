import React from 'react';
import ReactDOM from 'react-dom';

import MiniRouter from './router/MiniRouter';

import {Dashboard} from './layout';
import {Missing404Page, WelcomePage} from './pages';

import DashboardPageActions from './actions/DashboardPageActions';

// Render the App
ReactDOM.render((
    <Dashboard />
), document.getElementById("app"));


// Add some base dashboard routes
MiniRouter
    .add(function() {
        console.log('Welcome page selected for index route');
        DashboardPageActions.setCurrentPage((<WelcomePage />));
    })
    .add('*', function(path) {
        console.log('Missing page selected for missing route: ' + path);
        DashboardPageActions.setCurrentPage((<Missing404Page path={path}/>));
    })
    .listen();


