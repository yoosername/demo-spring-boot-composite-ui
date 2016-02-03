console.log("Dashboard components plugin loaded");

/*
    Note: Dont 'require' anything in a feature plugin outside of a define
    because they are lazy loaded, so the feature might not be ready yet
*/

//
//    Main dashboard layout wrapper
//
define('dashboard', function() {

    var AppNavbar = require("dashboard/navbar");
    var AppSidebar = require("dashboard/sidebar");

    return React.createClass({
            render: function () {
                return (
                    <div id="wrapper" >
                        <div className="row">
                            <div className="col-md-3">
                                <AppSidebar />
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <AppNavbar />
                                </div>
                                <div className="row">
                                    <div id="content" className="feature-page">
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        })

});

//
//    Main Dashboard Nav Bar
//
define('dashboard/navbar', function() {

    var Link = require("react-router").Link;

    return React.createClass({
        render: function () {
            return (
                <div className="navbar">
                    <ul>
                        <li><Link to="/welcome">Home</Link></li>
                        <li><Link to="/feature">Feature</Link></li>
                        <li><Link to="/doesntexist">Doesnt Exist</Link></li>
                        <ul className="nav-right">
                            <li><a className="active" href="#about">About</a></li>
                            <li><a href="#login">Login</a></li>
                        </ul>
                    </ul>
                </div>
            );
        }
    })

});

//
//    Main Dashboard Side Bar
//
define('dashboard/sidebar', function() {

    return React.createClass({
        render: function () {
            return (
                <div className="nav-side-menu">
                    <div className="brand">Composite UI Demo</div>
                    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                    <div className="menu-list">

                        <ul id="menu-content" className="menu-content collapse out">
                            <li>
                                <a href="#">
                                    <i className="fa fa-dashboard fa-lg"></i> Dashboard
                                </a>
                            </li>

                            <li  data-toggle="collapse" data-target="#products" className="collapsed active">
                                <a href="#">
                                    <i className="fa fa-gift fa-lg"></i>
                                    UI Elements <span className="arrow"></span>
                                </a>
                            </li>
                            <ul className="sub-menu collapse" id="products">
                                <li className="active"><a href="#">CSS3 Animation</a></li>
                                <li><a href="#">General</a></li>
                                <li><a href="#">Buttons</a></li>
                                <li><a href="#">Tabs & Accordions</a></li>
                                <li><a href="#">Typography</a></li>
                                <li><a href="#">FontAwesome</a></li>
                                <li><a href="#">Slider</a></li>
                                <li><a href="#">Panels</a></li>
                                <li><a href="#">Widgets</a></li>
                                <li><a href="#">Bootstrap Model</a></li>
                            </ul>


                            <li data-toggle="collapse" data-target="#service" className="collapsed">
                                <a href="#"><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="service">
                                <li>New Service 1</li>
                                <li>New Service 2</li>
                                <li>New Service 3</li>
                            </ul>


                            <li data-toggle="collapse" data-target="#new" className="collapsed">
                                <a href="#"><i className="fa fa-car fa-lg"></i> New <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="new">
                                <li>New New 1</li>
                                <li>New New 2</li>
                                <li>New New 3</li>
                            </ul>


                            <li>
                                <a href="#">
                                    <i className="fa fa-user fa-lg"></i> Profile
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="fa fa-users fa-lg"></i> Users
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    })

});