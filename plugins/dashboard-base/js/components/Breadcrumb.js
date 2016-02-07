import React from 'react';
import ReactDOM from 'react-dom';

export class Breadcrumb extends React.Component {
    render() {
        return(
            <ol className="breadcrumb">
                <li className="active">
                    <i className="fa fa-dashboard"></i> {this.props.text}
                </li>
            </ol>
        );
    }
}