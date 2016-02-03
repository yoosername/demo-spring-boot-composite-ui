console.log("Feature page plugin loaded");

//
//    Example Dashboard feature page
//
define('dashboard/pages/feature', function() {

    return React.createClass({
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement("h3", null, "This is an example feature page")
                )
            );
        }
    })

});

// TODO: Add this feature dynamically to the global router e.g.
// require("router/routes").add("feature", require("dashboard/pages/feature"))
