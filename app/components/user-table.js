import Ember from 'ember';

export default Ember.Component.extend({
    store:Ember.inject.service(),
    actions:{
        addUser(){
            this.get("store").createRecord("user",{
                name:"Ajay",
                age:23
            }).save();
        }
    }
});
