import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('place');
  },
  actions: {
    savePlace: function(context) {
      var place = this.modelFor("places.create");

      place.save().then((model) => {
        var profile = this.modelFor("application");
        profile.set("place", [place]);
        // profile.save(); this needs to save properly. 
        this.transitionTo("profile", profile);

      }, (error) => {
        console.log(error);
      });
    }
  }
});
