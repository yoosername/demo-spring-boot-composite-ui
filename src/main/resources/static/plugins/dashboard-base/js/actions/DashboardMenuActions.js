var DashboardDispatcher = require('../dispatcher/DashboardDispatcher');
var DashboardConstants = require('../constants/DashboardConstants');
var ActionTypes = DashboardConstants.ActionTypes;

class DashboardMenuActions {

    /**
     * @param  {string} id
     * @param  {jsx} menuItem
     */
    addMenuItem(jsx) {
        DashboardDispatcher.dispatch({
            type: ActionTypes.ADD_MENU_ITEM,
            jsx: jsx
        });
    }

    /**
     * @param  {string} id
     */
    removeMenuItem(id) {
        DashboardDispatcher.dispatch({
            type: ActionTypes.REMOVE_MENU_ITEM,
            key: key
        });
    }

};

let DashboardMenuActionsInstance = new DashboardMenuActions();

export default DashboardMenuActionsInstance;