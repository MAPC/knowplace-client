import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.query("place", {q: params.q });
  },
  actions: { 
    savePlace: function(context) {
      var place = context;
      var user = this.modelFor("application");
      // place.save().then((model) => {
      var profile = this.store.createRecord('profile', {});
      profile.set("place", place);
      profile.save().then((profile) => {
        user.set("profiles", [profile]);
        this.transitionTo("profile", profile);
      });
      // }, (error) => {
      //   console.log(error);
      // });
    }
  }
});
