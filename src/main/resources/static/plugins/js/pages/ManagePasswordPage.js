import React from 'react';
import ReactDOM from 'react-dom';

import {PageHeader, Breadcrumb} from '../components';

export class ManagePasswordPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <PageHeader title="Manage" subtitle="password">
                    <Breadcrumb text="Dashboard > Manage Password"/>
                </PageHeader>
            </div>
        );
    }
}