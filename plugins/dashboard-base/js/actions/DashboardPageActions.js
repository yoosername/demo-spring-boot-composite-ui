var DashboardDispatcher = require('../dispatcher/DashboardDispatcher');
var DashboardConstants = require('../constants/DashboardConstants');
var ActionTypes = DashboardConstants.ActionTypes;

class DashboardPageActions {

    /**
     * @param  {string} name
     * @param  {jsx} menuItem
     */
    setCurrentPage(jsx) {
        DashboardDispatcher.dispatch({
            type: ActionTypes.SET_CURRENT_PAGE,
            page: jsx
        });
    }

    addRoute(path, jsx) {
        DashboardDispatcher.dispatch({
            type: ActionTypes.SET_CURRENT_PAGE,
            page: jsx
        });
    }

};

let DashboardPageActionsInstance = new DashboardPageActions();

export default DashboardPageActionsInstance;