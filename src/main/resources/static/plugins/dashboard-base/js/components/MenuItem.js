import React from 'react';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
    render() {
        return
            <li>
                <Link to={this.props.path}>
                    <i className="fa fa-fw fa-arrows-v"></i> {this.props.name} <i className="fa fa-fw fa-caret-down"></i>
                </Link>
                <Route path={this.props.path} component={this.props.component} key={this.props.path} />
            </li>
            ;
    }
}