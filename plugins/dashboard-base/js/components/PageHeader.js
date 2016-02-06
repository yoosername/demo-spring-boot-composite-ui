import React from 'react';
import ReactDOM from 'react-dom';

export class PageHeader extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            {this.props.title} <small>{this.props.subtitle}</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> {this.props.breadcrumb}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}