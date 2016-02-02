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
                    <div id="wrapper" >
                        <div className="row">
                            <div className="col-md-3">
                                <AppSidebar />
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <AppNavbar />
                                </div>
                                <div id="content"></div>
                            </div>
                        </div>
                    </div>
                );
            }
        })

});
