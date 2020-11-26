import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.get("store").findAll("user")
        // return [
        //     {
        //         name:"Raj",
        //         age:22
        //     },
        //     {
        //         name:"Pal",
        //         age:33
        //     },
        //     {
        //         name:"Suresh",
        //         age:42
        //     },
        //     {
        //         name:"Ramesh",
        //         age:41
        //     }
        // ]
    }
});
