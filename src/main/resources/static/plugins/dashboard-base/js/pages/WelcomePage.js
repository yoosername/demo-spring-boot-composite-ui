import React from 'react';
import ReactDOM from 'react-dom';

import {PageHeader, PageHighlight, RecentTasks} from '../components';

export class WelcomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <PageHeader title="Dashboard" subtitle="Overview" breadcrumb="dashboard"/>
                <PageHighlight />
                <RecentTasks />
            </div>
        );
    }
}