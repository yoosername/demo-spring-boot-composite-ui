console.log("Dashboard dynamic App router loader");

/*
 *
 * Defines standard dashboard Base Routing
 *
 */
define('router/routes', function() {

    var React = require("react");
    var Route = require("react-router").Route;

    var routes = {};

    return {
        add : function(path, component){
            routes[path] = (<Route path={path} component={component} key={path} />);
            // so in theory when you push some state into history
            // Router will notice and lazy load the corresponding component via lookup to its state
        },
        remove : function(path){
            delete routes[path];
        },
        get : function(path){
            console.log("before: "+ path);
            var strippedPath = path.replace(/^\//g, '');
            console.log("after: "+ strippedPath);
            if(strippedPath){
                if(routes[strippedPath]) {
                    console.log("route requested ("+strippedPath+") : "+ routes[strippedPath]);
                    return routes[strippedPath];
                }else{
                    return routes["*"];
                }
            }else{
                return routes;
            }
        }
    }

});

//
//    Dynamic dashboard base route
//      - Loads child routes lazily
//
define('dashboard/routes/base', function() {

    var React = require("react");

    var Router = require("react-router").Router;
    var BrowserHistory = require("react-router").browserHistory;

    var DashboardRoute = {

        path: '/',

        getChildRoutes(location, callback) {
            //console.log("getChildRoutes called: ");
            //console.log(location);
            callback(null, require("router/routes").get(location.pathname));
        },

        getIndexRoute(location, callback) {
            //console.log("getIndexRoute called: ");
            //console.log(location);
            callback(null, require("router/routes").get("welcome"));
        },

        getComponents(location, callback) {
            //console.log("getComponentss called: ");
            //console.log(location);
            callback(null, require('dashboard'));
        }
    };

    return React.createClass({
        render: function () {
            return (
                <Router history={BrowserHistory} routes={DashboardRoute} />
            );
        }
    })

});

//
//    Dynamic dashboard App Router
//
define('dashboard/router', function() {

    var React = require("react");
    var ReactDOM = require("react-dom");

    var Router = React.createFactory(require("dashboard/routes/base"));

    return {
        render : function(domId){
            ReactDOM.render(
                Router(),
                document.getElementById(domId)
            );
        }
    }

});

//
//    Main Dashboard - default routes
//
define('dashboard/routes/default', function() {

    var Feature = require('dashboard/pages/feature');
    var Welcome = require('dashboard/pages/welcome');
    var ErrorPage = require('dashboard/pages/404');

    var routes = require('router/routes');

    routes.add('welcome', Welcome);
    routes.add('feature', Feature);
    routes.add('*', ErrorPage);

});