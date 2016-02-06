import React from 'react';
import ReactDOM from 'react-dom';

export class RecentTasks extends React.Component {
    render() {
        return(
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
}