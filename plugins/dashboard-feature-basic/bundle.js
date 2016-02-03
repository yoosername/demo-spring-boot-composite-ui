console.log("Feature page plugin loaded");

//
//    Example Dashboard feature page
//
define('dashboard/pages/feature', function() {

    return React.createClass({
        render: function () {
            return (
                <div>
                    <h3>This is an example feature page</h3>
                </div>
            );
        }
    })

});

// TODO: Add this feature dynamically to the global router e.g.
// require("router/routes").add("feature", require("dashboard/pages/feature"))
