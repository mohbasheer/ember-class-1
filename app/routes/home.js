import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return {
        }
    },
    actions:{
        touch(val){
            // this action is triggered from `controller/home`
            console.log("touched called ",val)
        }
    }
});