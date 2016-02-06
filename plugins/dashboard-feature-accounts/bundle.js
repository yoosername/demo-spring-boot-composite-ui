console.log("Feature page plugin loaded");

//
//    Example Dashboard Accounts feature
//

// TODO: Figure out how to cascade addition and removal of menu items and associated
// TODO: routes / components into the dashboard at runtime
// TODO: possibly by using flux stores with event emmiter and simply pushing changes into it

define('dashboard/features/accounts', function() {

    var StashNewAccountPage = require("dashboard/pages/stashaccount");
    var JiraNewAccountPage = require("dashboard/pages/jiraaccount");
    var ConfluenceNewAccountPage = require("dashboard/pages/confluenceaccount");

    // Get handle to the navbar and insert new SidebarItem
    var accountsMenu = require("dashboard").addSidebarDropdownMenuItem("Accounts");

    accountsMenu.addMenuItem("Stash","stash",StashNewAccountPage);
    accountsMenu.addMenuItem("Jira","jira",JiraNewAccountPage);
    accountsMenu.addMenuItem("Confluence","confluence",ConfluenceNewAccountPage);

});

define('dashboard/components/stashaccountmenuitem', function() {

    var React = require("react");
    var RoutedMenuItem = require("dashboard/components/routedmenuitem");
    var StashAccountPage = require("dashboard/pages/stashaccount");

    return React.createClass({
        render: function () {
            return (
                <RoutedMenuItem name="stash" path="stash" component={<StashAccountPage />} />
            );
        }
    })

});

define('dashboard/pages/stashaccount', function() {

    return React.createClass({
        render: function () {
            return (
                <div>
                    <h3>This is an example stash account page</h3>
                </div>
            );
        }
    })

});

define('dashboard/pages/jiraaccount', function() {

    return React.createClass({
        render: function () {
            return (
                <div>
                    <h3>This is an example Jira account page</h3>
                </div>
            );
        }
    })

});

define('dashboard/pages/confluenceaccount', function() {

    return React.createClass({
        render: function () {
            return (
                <div>
                    <h3>This is an example Confluence account page</h3>
                </div>
            );
        }
    })

});