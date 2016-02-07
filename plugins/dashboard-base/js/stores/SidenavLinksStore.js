import DashboardDispatcher from '../dispatcher/DashboardDispatcher';
import DashboardConstants from '../constants/DashboardConstants';

import FluxStore from './FluxStore';

var ActionTypes = DashboardConstants.ActionTypes;


var _items = {};

class SidenavLinksStore extends FluxStore {

    constructor() {
        super();
    }

    get (id) {
        return _items[id];
    }

    getAll() {
        let itemsArray = Object.keys(_items).map((k) => _items[k]);
        return itemsArray;
    }
}

let sidenavLinksStoreInstance = new SidenavLinksStore();

sidenavLinksStoreInstance.dispatchToken = DashboardDispatcher.register(function(action) {

    switch (action.type) {

        case ActionTypes.ADD_SIDENAV_MENU_ITEM:
            _items[action.id] = action.menuItem;
            sidenavLinksStoreInstance.emitChange();
            console.log("new menu item added");
            break;

        default:
            console.log("dispatcher fired but i didnt recognise it");
            console.log(action.type);
    }

});

export default sidenavLinksStoreInstance;