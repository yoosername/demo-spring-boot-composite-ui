console.log("Dashboard pages plugin loaded");

/*
    Note: Dont 'require' anything in a feature plugin outside of a define
    because they are lazy loaded, so the feature might not be ready yet
*/

//
//    Main Dashboard welcome page
//
define('dashboard/pages/welcome', function() {

    return React.createClass({
        render: function () {
            return (
                React.createElement("h2", null, "Welcome to the composite Dashboard demo")
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

