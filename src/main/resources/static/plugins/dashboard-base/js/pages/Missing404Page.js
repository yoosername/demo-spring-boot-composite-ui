import React from 'react';
import ReactDOM from 'react-dom';

import {PageHeader} from '../components';

export class Missing404Page extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <PageHeader title="404" subtitle="Page not found" breadcrumb="404"/>
                <div className="alert alert-danger" >Sorry that feature page doesnt exist yet!!</div>
            </div>
        );
    }
}