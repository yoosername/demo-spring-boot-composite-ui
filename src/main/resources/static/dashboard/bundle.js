console.log("Dashboard plugin loaded");

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
                    React.createElement("div", {id: "wrapper"}, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-md-3"}, 
                                React.createElement(AppSidebar, null)
                            ), 
                            React.createElement("div", {className: "col-md-9"}, 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement(AppNavbar, null)
                                ), 
                                React.createElement("div", {className: "row"}, 
                                    React.createElement("div", {id: "content", className: "feature-page"}, 
                                        this.props.children
                                    )
                                )
                            )
                        )
                    )
                );
            }
        })

});

//
//    Main Dashboard 404 page
//
define('dashboard/pages/404', function() {

    return React.createClass({
        render: function () {
            return (
                React.createElement("div", {className: "alert alert-danger"}, "Sorry that feature doesnt exist yet!!")
            );
        }
    })

});

//
//    Main App Router Utility
//
define('dashboard/router', function() {

    // TODO: Add routes at runtime and dynamically update the router.

    var Dashboard = require("dashboard");

    var Router = require("react-router").Router;
    var Route = require("react-router").Route;


    var _routes = [];
    var _root_node = "";

    return {
        addRoute : function(path, component){
            _routes.push(React.createElement(Route, {path: path, component: component, key: path}))
        },
        getRoutes : function(){
            return _routes;
        },
        getElement : function(){
            return React.createElement(
                React.createClass({
                    render: function () {
                        return (
                            React.createElement(Router, null, 
                                React.createElement(Route, {path: "/", component: Dashboard}, 
                                    _routes
                                )
                            )
                        );
                    }
                })
            )
        },
        render : function(domId){
            if( domId ) {
                this._root_node = domId;

                require("react-dom").render(
                    this.getElement(),
                    document.getElementById(domId)
                );
            }
        },
        update : function(){
            // If no root node set yet then we havent rendered it so do nothing
            console.log("attempting to reload router in : " + this._root_node);
            if( this._root_node ) this.render(this._root_node);
        }
    }

});

//
//    Main Dashboard - default routes
//
define('dashboard/routes/default', function() {

    var ErrorPage = require('dashboard/pages/404');
    var Feature = require('dashboard/pages/feature');
    var appRouter = require('dashboard/router');

    appRouter.addRoute('feature', Feature);
    appRouter.addRoute('*', ErrorPage);

});

//
//    Main Dashboard Nav Bar
//
define('dashboard/navbar', function() {

    var Link = require("react-router").Link;

    return React.createClass({
        render: function () {
            return (
                React.createElement("div", {className: "navbar"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement("a", {href: "#home"}, "Home")), 
                        React.createElement("li", null, React.createElement(Link, {to: "/feature"}, "Feature")), 
                        React.createElement("li", null, React.createElement("a", {href: "#contact"}, "Contact")), 
                        React.createElement("ul", {className: "nav-right"}, 
                            React.createElement("li", null, React.createElement("a", {className: "active", href: "#about"}, "About")), 
                            React.createElement("li", null, React.createElement("a", {href: "#login"}, "Login"))
                        )
                    )
                )
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
                React.createElement("div", {className: "nav-side-menu"}, 
                    React.createElement("div", {className: "brand"}, "Composite UI Demo"), 
                    React.createElement("i", {className: "fa fa-bars fa-2x toggle-btn", "data-toggle": "collapse", "data-target": "#menu-content"}), 

                    React.createElement("div", {className: "menu-list"}, 

                        React.createElement("ul", {id: "menu-content", className: "menu-content collapse out"}, 
                            React.createElement("li", null, 
                                React.createElement("a", {href: "#"}, 
                                    React.createElement("i", {className: "fa fa-dashboard fa-lg"}), " Dashboard"
                                )
                            ), 

                            React.createElement("li", {"data-toggle": "collapse", "data-target": "#products", className: "collapsed active"}, 
                                React.createElement("a", {href: "#"}, 
                                    React.createElement("i", {className: "fa fa-gift fa-lg"}), 
                                    "UI Elements ", React.createElement("span", {className: "arrow"})
                                )
                            ), 
                            React.createElement("ul", {className: "sub-menu collapse", id: "products"}, 
                                React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "CSS3 Animation")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "General")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "Buttons")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "Tabs & Accordions")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "Typography")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "FontAwesome")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "Slider")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "Panels")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "Widgets")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "Bootstrap Model"))
                            ), 


                            React.createElement("li", {"data-toggle": "collapse", "data-target": "#service", className: "collapsed"}, 
                                React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-globe fa-lg"}), " Services ", React.createElement("span", {className: "arrow"}))
                            ), 
                            React.createElement("ul", {className: "sub-menu collapse", id: "service"}, 
                                React.createElement("li", null, "New Service 1"), 
                                React.createElement("li", null, "New Service 2"), 
                                React.createElement("li", null, "New Service 3")
                            ), 


                            React.createElement("li", {"data-toggle": "collapse", "data-target": "#new", className: "collapsed"}, 
                                React.createElement("a", {href: "#"}, React.createElement("i", {className: "fa fa-car fa-lg"}), " New ", React.createElement("span", {className: "arrow"}))
                            ), 
                            React.createElement("ul", {className: "sub-menu collapse", id: "new"}, 
                                React.createElement("li", null, "New New 1"), 
                                React.createElement("li", null, "New New 2"), 
                                React.createElement("li", null, "New New 3")
                            ), 


                            React.createElement("li", null, 
                                React.createElement("a", {href: "#"}, 
                                    React.createElement("i", {className: "fa fa-user fa-lg"}), " Profile"
                                )
                            ), 

                            React.createElement("li", null, 
                                React.createElement("a", {href: "#"}, 
                                    React.createElement("i", {className: "fa fa-users fa-lg"}), " Users"
                                )
                            )
                        )
                    )
                )
            );
        }
    })

});