import React from 'react';
import ReactDOM from 'react-dom';

//import {Navigation} from '../components';
import {Navigation} from '../components';

export class Dashboard extends React.Component {

    render() {
        return(
            <div id="wrapper">
                <Navigation />
                <div id="page-wrapper">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}