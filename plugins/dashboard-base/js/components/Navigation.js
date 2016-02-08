import React from 'react';
import {Link} from '../components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import DashboardMenuStore from '../stores/DashboardMenuStore';

function getStateFromStores() {
    return {
        menuItems: DashboardMenuStore.getMenuItems()
    };
}

export class Section extends React.Component {

    render() {
        return (
            <li>
                <Link to={this.props.to}><i className={this.props.icon}></i> {this.props.children}</Link>
            </li>
        );
    }
}

class ExpandSection extends React.Component {

    constructor(){
        super();

        this.state = {
            open: false,
            class: "nav nav-second-level collapse"
        };
    }

    handleClick(event){

        event.preventDefault();

        if(this.state.open) {
            this.setState({
                open: false,
                class: "nav nav-second-level collapse"
            });
        }else{
            this.setState({
                open: true,
                class: "nav nav-second-level collapse in"
            });
        }
    }

    render() {
        return (
            <li>
                <a href="#" onClick={this.handleClick.bind(this)}>
                    <i className={this.props.icon} />
                    {this.props.title}
                    <span className="fa arrow"></span>
                </a>
                <ul className={this.state.class}>
                    {this.props.children}
                </ul>
            </li>
        );
    }
}

class Sidemenu extends React.Component{
    render() {
        return (
            <div className="navbar-default sidebar">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav">
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }
}

export class Navigation extends React.Component {

    constructor(){
        super();

        this.state = getStateFromStores();
    }

    componentDidMount() {
        DashboardMenuStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        DashboardMenuStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Dashboard</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-user"></i> Profile <b className="caret"></b>
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="password"><i className="fa fa-fw fa-user"></i> Manage Password</Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <Sidemenu>
                    <Section to="account1" icon="fa fa-dashboard fa-fw">Dashboard</Section>
                    <Section to="account1" icon="fa fa-fw fa-user">Account 1</Section>
                    <Section to="account2" icon="fa fa-fw fa-user">Account 2</Section>
                    <ExpandSection title="stuff" icon="fa fa-fw fa-user">
                        <Section to="submenu1" icon="fa fa-fw fa-user">Sub Menu 1</Section>
                        <Section to="submenu2" icon="fa fa-fw fa-user">Sub Menu 2</Section>
                    </ExpandSection>
                    <Section to="things" icon="fa fa-fw fa-user">Things</Section>
                    {this.state.menuItems}
                </Sidemenu>
            </nav>
        );
    }

    _onChange() {
        this.setState(getStateFromStores());
    }
}