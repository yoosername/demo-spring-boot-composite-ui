console.log("App layout plugin started");

//
//    Main App layout wrapper
//
define('app', function() {

    console.log("defined app");

    var AppNavbar = require("app/navbar");
    var AppSidebar = require("app/sidebar");

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
                                    React.createElement("div", {id: "content"}, 
                                        "// Render children dynamically under here ( e.g. feature )", 
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
//    Main App layout wrapper
//
define('app404', function() {

    console.log("defined app404");

    return React.createClass({
        render: function () {
            return (
                React.createElement("div", {className: "alert alert-danger"}, "Sorry there is no page for that yet!!")
            );
        }
    })

});

//
//    Main App Router Utility
//
define('app/router', function() {

    console.log("defined app/router");

    var App = require("app");

    var Router = require("react-router").Router;
    var Route = require("react-router").Route;

    var appRoutes = [];

    return {
        addRoute : function(path, component){
            appRoutes.push(React.createElement(Route, {path: path, component: component, key: path}))
        },
        getRoutes : function(){
            return appRoutes;
        },
        getElement : function(){
            return React.createElement(
                React.createClass({
                    render: function () {
                        return (
                            React.createElement(Router, null, 
                                React.createElement(Route, {path: "/", component: App}, 
                                    appRoutes
                                )
                            )
                        );
                    }
                })
            )
        },
        render : function(domId){
            require("react-dom").render(
                this.getElement(),
                document.getElementById(domId)
            );

        }
    }

});

//
//    Main App default routes
//
define('app/routes/default', function() {

    console.log("defined app/routes/default");

    var App404 = require('app404');
    var Feature = require('app/feature');
    var appRouter = require('app/router');

    appRouter.addRoute('feature', Feature);
    appRouter.addRoute('*', App404);

});

// Note: Dont require anything from a feature plugin outside of a define
// because they are lazy loaded, so the feature might not be ready yet