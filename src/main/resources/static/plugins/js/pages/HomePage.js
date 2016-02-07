import React from 'react';
import ReactDOM from 'react-dom';

import {PageHeader, Breadcrumb, PageHighlight, RecentTasks} from '../components';

export class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <PageHeader title="Dashboard" subtitle="Overview">
                    <Breadcrumb text="Dashboard"/>
                </PageHeader>
                <PageHighlight />
                <RecentTasks />
            </div>
        );
    }
}