console.log("Main App content plugin started");


//
//    Main App Nav Bar
//
define('app/navbar', function() {

    console.log("defined app/navbar");

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
//    Main App Side Bar
//
define('app/sidebar', function() {

    console.log("defined app/sidebar");

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