import React from 'react';
import ReactDOM from 'react-dom';

import {PageHeader, PageHighlight, RecentTasks} from '../components';

export class ManagePasswordPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <PageHeader title="Profile" subtitle="Manage Password" breadcrumb="dashboard > manage password"/>

            </div>
        );
    }
}