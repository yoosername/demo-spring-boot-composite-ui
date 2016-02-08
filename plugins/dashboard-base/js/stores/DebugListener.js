import DashboardDispatcher from '../dispatcher/DashboardDispatcher';


var debug = false;
var token = null;

class DebugListener {

    constructor(){
        this.addListener();
    }

    addListener(){
        token = DashboardDispatcher.register(

            function(action) {

                if(debug==true){
                    console.log("ACTION DISPATCHED: " + action.type);
                    console.log(action);
                }

            }

        );
    }

    on(){
        debug = true;
    }

    off(){
        debug = false;
    }

}

export default new DebugListener();