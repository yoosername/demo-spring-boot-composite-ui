console.log("Feature plugin started");

//
//    Example feature - adds a new route to the global router
//
define('app/feature', function() {

    console.log("defined app/feature");

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
