import React from 'react';
import {Link} from '../components';

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
                
                <div className="navbar-default navbar-static-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="side-menu">
                            <li className="sidebar-search">
                                <div className="input-group custom-search-form">
                                    <input type="text" className="form-control" placeholder="Search..."></input>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <Link to="/"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-bar-chart-o fa-fw"></i> Accounts<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level collapse">
                                    <li>
                                        <Link to="account1">Account1</Link>
                                    </li>
                                    <li>
                                        <Link to="account2">Account2</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="os"><i className="fa fa-table fa-fw"></i> Open Source</Link>
                            </li>
                            <li>
                                <Link to="stuff"><i className="fa fa-edit fa-fw"></i> Stuff</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-wrench fa-fw"></i> Version Control<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level collapse">
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
                                <Link to="#">
                                    <i className="fa fa-sitemap fa-fw"></i> Repositories<span className="fa arrow"></span>
                                </Link>
                                <ul className="nav nav-second-level collapse">
                                    <li>
                                        <Link to="nexus">Nexus</Link>
                                    </li>
                                    <li>
                                        <Link to="npm">NPM</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Mirrors <span className="fa arrow"></span></Link>
                                        <ul className="nav nav-third-level collapse">
                                            <li>
                                                <Link to="gems">Gems</Link>
                                            </li>
                                            <li>
                                                <Link to="pypy">PyPy</Link>
                                            </li>
                                            <li>
                                                <Link to="maven">Maven</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}