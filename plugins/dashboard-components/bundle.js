console.log("Dashboard page components plugin loaded");

/*
*
* Defines standard dashboard page components
*
*/
define('dashboard/components/routedmenuitem', function() {

    var React = require("react");
    var Route = require("react-router").Route;

    return React.createClass({
        render: function () {
            return (
                <li>
                    <Link to={this.props.path}>
                        <i className="fa fa-fw fa-arrows-v"></i> {this.props.name} <i className="fa fa-fw fa-caret-down"></i>
                    </Link>
                    <Route path={this.props.path} component={this.props.component} key={this.props.path} />
                </li>
            );
        }
    })

});

//
//    Dashboard page header + breadcrumbs
//
define('dashboard/components/header', function() {

    return React.createClass({
        render: function () {
            return (
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
    })

});

//
//    Dashboard quick summary component
//
define('dashboard/components/highlights', function() {

    return React.createClass({
        render: function () {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-comments fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">26</div>
                                            <div>New Comments!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-green">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-tasks fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">12</div>
                                            <div>New Tasks!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-shopping-cart fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">124</div>
                                            <div>New Orders!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-red">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-support fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">13</div>
                                            <div>Support Tickets!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    })

});

//
//    Dashboard Recent Tasks component
//
define('dashboard/components/recenttasks', function() {

    return React.createClass({
        render: function () {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Recent Tasks</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <span className="badge">just now</span>
                                            <i className="fa fa-fw fa-calendar"></i> Calendar updated
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <span className="badge">4 minutes ago</span>
                                            <i className="fa fa-fw fa-comment"></i> Commented on a post
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <span className="badge">23 minutes ago</span>
                                            <i className="fa fa-fw fa-truck"></i> Order 392 shipped
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <span className="badge">46 minutes ago</span>
                                            <i className="fa fa-fw fa-money"></i> Invoice 653 has been paid
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <span className="badge">1 hour ago</span>
                                            <i className="fa fa-fw fa-user"></i> A new user has been added
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <span className="badge">2 hours ago</span>
                                            <i className="fa fa-fw fa-check"></i> Completed task: "pick up dry cleaning"
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <span className="badge">yesterday</span>
                                            <i className="fa fa-fw fa-globe"></i> Saved the world
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <span className="badge">two days ago</span>
                                            <i className="fa fa-fw fa-check"></i> Completed task: "fix error on sales page"
                                        </a>
                                    </div>
                                    <div className="text-right">
                                        <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    })

});