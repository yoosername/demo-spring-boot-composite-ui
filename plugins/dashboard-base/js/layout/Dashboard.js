import React from 'react';
import ReactDOM from 'react-dom';

import {Navigation} from '../components';
import DashboardPageStore from '../stores/DashboardPageStore';

import {HomePage} from '../pages';

function getStateFromStores() {
    return {
        page: DashboardPageStore.getCurrentPage()
    };
}

export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: (<HomePage />)
        };
    }

    componentDidMount() {
        DashboardPageStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        DashboardPageStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return(
            <div id="wrapper">
                <Navigation />
                <div id="page-wrapper" className="dashboard-page">
                        {this.state.page}
                </div>
            </div>
        );
    }


    _onChange() {
        this.setState(getStateFromStores());
    }
}