import { createHistory } from 'history'

var routes = [];
var mode = null;
var root = '/';
var indexRouteHandler = null
var defaultRouteHandler = null;

let history = createHistory();
let unlisten = null;

var clearSlashes = function(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
}

class Router {

    add(re, handler) {

        if(typeof re == 'function') {
            handler = re;
            re = '';
        }

        if(clearSlashes(re) == ""){
            //console.log("adding index route handler");
            indexRouteHandler = handler;
            return this;
        }

        if(clearSlashes(re) == "*"){
            //console.log("adding default route handler");
            defaultRouteHandler = handler;
            return this;
        }

        //console.log("adding new route: '" + re + "'");
        routes.push({ re: re, handler: handler});

        return this;
    }

    remove(param) {
        for(var i=0, r; i<routes.length, r = routes[i]; i++) {
            if(r.handler === param || r.re.toString() === param.toString()) {
                routes.splice(i, 1);
                return this;
            }
        }
        return this;
    }

    flush() {
        routes = [];
        mode = null;
        root = '/';
        indexRouteHandler = null;
        defaultRouteHandler = null;
        (typeof unlisten == 'function') && unlisten();
        return this;
    }

    check(path) {

        var origPath = path;
        path = clearSlashes(path);

        if( path == "" ){
            (typeof indexRouteHandler == 'function') && indexRouteHandler();
            return this;
        }

        for (var i = 0; i < routes.length; i++) {
            //console.log("Comparing path='" + path + "' to regex='" + routes[i].re + "'");

            var match = path.match(routes[i].re);

            if (match) {
                //console.log("route found for path: '" + path + "'");
                match.shift();
                routes[i].handler.apply({}, match);
                return this;
            }
        }

        // If we get here then run the default route handler
        (typeof defaultRouteHandler == 'function') && defaultRouteHandler(origPath);

        return this;
    }

    listen() {
        //console.log("Starting to Listen for History pushstate events");
        var self = this;

        // Stop previous listener
        if(typeof unlisten == 'function') {
            unlisten();
        }
        // Start a new one
        unlisten = history.listen(location => {
            //console.log("Pushstate event caught for path '" + location.pathname + "'");
            self.check(location.pathname);
        });
        return this;
    }

    unlisten() {
        // Stop previous listener
        if(typeof unlisten == 'function') {
            unlisten();
        }
    }

    navigate(path) {
        path = path ? path : '';
        //console.log("Attempting to navigate to: " + root + clearSlashes(path));
        history.push({
            pathname: root + clearSlashes(path)
        })
        return this;
    }
}

var router = new Router();

export default router;