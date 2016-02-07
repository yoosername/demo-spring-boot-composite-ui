var DashboardDispatcher = require('../dispatcher/DashboardDispatcher');
var DashboardConstants = require('../constants/DashboardConstants');
var ActionTypes = DashboardConstants.ActionTypes;

class DashboardPageActions {

    /**
     * @param  {string} name
     * @param  {jsx} menuItem
     */
    setCurrentPage(jsx) {
        console.log("dispatching action SET_CURRENT_PAGE")
        DashboardDispatcher.dispatch({
            type: ActionTypes.SET_CURRENT_PAGE,
            page: jsx
        });
    }

};

let DashboardPageActionsInstance = new DashboardPageActions();

export default DashboardPageActionsInstance;