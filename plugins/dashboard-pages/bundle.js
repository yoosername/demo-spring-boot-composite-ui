console.log("Dashboard pages plugin loaded");

//
//    Main Dashboard welcome page
//
define('dashboard/pages/welcome', function() {

    var HeaderComponent = require("dashboard/components/header");
    var HighlightsComponent = require("dashboard/components/highlights");
    var RecentTasksComponent = require("dashboard/components/recenttasks");

    return React.createClass({
        render: function () {
            return (
                <div className="container-fluid">
                    <HeaderComponent title="Dashboard" subtitle="Overview" breadcrumb="dashboard"/>
                    <HighlightsComponent />
                    <RecentTasksComponent />
                </div>
            );
        }
    })

});

//
//    Main Dashboard 404 page
//
define('dashboard/pages/404', function() {

    var HeaderComponent = require("dashboard/components/header");

    return React.createClass({
        render: function () {
            return (
                <div className="container-fluid">
                    <HeaderComponent title="404" subtitle="Page not found" breadcrumb="404"/>
                    <div className="alert alert-danger" >Sorry that feature page doesnt exist yet!!</div>
                </div>
            );
        }
    })

});

