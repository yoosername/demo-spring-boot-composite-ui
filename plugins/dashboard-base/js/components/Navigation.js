import React from 'react';
import ReactDOM from 'react-dom';


import { Link } from 'react-router';

export class Navigation extends React.Component {

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
                    <a className="navbar-brand" href="/">Composite Dashboard Demo</a>
                </div>
                <ul className="nav navbar-right top-nav">
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-user"></i> John Smith <b className="caret"></b>
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="about"><i className="fa fa-fw fa-user"></i> About</Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to="profile"><i className="fa fa-fw fa-envelope"></i> Profile</Link>
                            </li>
                        </ul>
                    </li>
                    {this.props.navbarmenuitems}
                </ul>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav side-nav">
                        <li className="active">
                            <Link to="/"><i className="fa fa-fw fa-dashboard"></i>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="javascript:;" data-toggle="collapse" data-target="#demo">
                                <i className="fa fa-fw fa-arrows-v"></i> Accounts <i className="fa fa-fw fa-caret-down"></i>
                            </Link>
                            <ul id="demo" className="collapse">
                                <li>
                                    <Link to="bitbucket">Bitbucket</Link>
                                </li>
                                <li>
                                    <Link to="jira">Jira</Link>
                                </li>
                                <li>
                                    <Link to="confluence">Confluence</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="downloads"><i className="fa fa-fw fa-table"></i>Downloads</Link>
                        </li>
                        <li>
                            <Link to="stats"><i className="fa fa-fw fa-edit"></i>Stats</Link>
                        </li>
                        {this.props.sidebarmenuitems}
                    </ul>
                </div>

            </nav>
        );
    }
}