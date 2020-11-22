import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        touched(){
            // this action is triggered from home template
            console.log("touched called")
            // this action will be handled in `routes/home.js`
            this.send("touch" ,"value one")
        }
    },
    firstName:"Mohammed",
    lastName:"Basheer",
    fullName:Ember.computed("firstName","lastName",{
        get(){
            // this code will be executed on below condition
            // 1) fullName getter function should be called
            // 2) firstName or lastName should be modified
            return `${this.get("firstName")} - ${this.get("lastName")}`
        }
    })
});
