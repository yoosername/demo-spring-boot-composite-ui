import DashboardDispatcher from '../dispatcher/DashboardDispatcher';
import DashboardConstants from '../constants/DashboardConstants';

import FluxStore from './FluxStore';

var ActionTypes = DashboardConstants.ActionTypes;


var menuItems = [];

class DashboardMenuStore extends FluxStore {

    constructor() {
        super();
    }

    addMenuItem (jsx) {
        //console.log("added");
        //console.log(jsx);
        menuItems.push(jsx);
    }

    removeMenuItem (key) {
        var newMenuItems = menuItems
            .filter(function (el) {
                //console.log(el);
                return el.props.key !== key;
            });
        menuItems = newMenuItems;
    }

    getMenuItems () {
        //console.log("JSX");
        //console.log(menuItems);
        return menuItems;
    }

}

let DashboardMenuStoreInstance = new DashboardMenuStore();

DashboardMenuStoreInstance.dispatchToken = DashboardDispatcher.register(function(action) {

    switch (action.type) {

        case ActionTypes.ADD_MENU_ITEM:
            DashboardMenuStoreInstance.addMenuItem(action.jsx);
            DashboardMenuStoreInstance.emitChange();
            break;

        case ActionTypes.REMOVE_MENU_ITEM:
            DashboardMenuStoreInstance.removeMenuItem(action.key);
            DashboardMenuStoreInstance.emitChange();
            break;

        default:
            // do nothing
    }

});

export default DashboardMenuStoreInstance;