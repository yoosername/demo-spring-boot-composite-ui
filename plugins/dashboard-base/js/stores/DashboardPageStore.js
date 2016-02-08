import DashboardDispatcher from '../dispatcher/DashboardDispatcher';
import DashboardConstants from '../constants/DashboardConstants';

import FluxStore from './FluxStore';

var ActionTypes = DashboardConstants.ActionTypes;


var currentPage = null;
var pages = [];

class DashboardPageStore extends FluxStore {

    constructor() {
        super();
    }

    getCurrentPage () {
        return currentPage;
    }

    add(page){
        pages.push(page);
    }

    remove(page){
        for(p in pages){
            if(page == p){
                delete pages[p];
            }
        }
    }

}

let DashboardPageStoreInstance = new DashboardPageStore();

DashboardPageStoreInstance.dispatchToken = DashboardDispatcher.register(function(action) {

    switch (action.type) {

        case ActionTypes.SET_CURRENT_PAGE:
            currentPage = action.page;
            DashboardPageStoreInstance.emitChange();
            //console.log("Page set to : " + action.page);
            break;

        case ActionTypes.ADD_PAGE:
            DashboardPageStoreInstance.add(action.page);
            DashboardPageStoreInstance.emitChange();
            //console.log("Page set to : " + action.page);
            break;

        default:
            //console.log("dispatcher fired but i didnt recognise it");
            //console.log(action.type);
    }

});

export default DashboardPageStoreInstance;