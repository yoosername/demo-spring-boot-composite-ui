console.log("App layout plugin started");

//
//    Main App layout wrapper
//
define('app', function() {

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
                                React.createElement("div", {id: "content"})
                            )
                        )
                    )
                );
            }
        })

});
