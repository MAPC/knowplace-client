import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  // afterModel: function() {
  //   var place = this.modelFor("places").get("firstObject");
  //   console.log(this.queryParams);
  //   this.transitionTo('places.show', place.id);
  // },
  // routeHandler: function() {
  //   if (this.get('q') === '') {
  //     var place = this.modelFor("places").get("firstObject");
  //     this.transitionTo('places.show', place.id);
  //   } else {

  //   }
  // }.observes('q'),
  model: function(params) {
    return this.store.query("report", {q: params.q });
  },
  actions: { 
    savePlace: function(context) {
      var report = context;
      var user = this.modelFor("application");
      // place.save().then((model) => {
      var profile = this.store.createRecord('profile', {});
      profile.set("report", report);
      profile.save().then((profile) => {
        user.set("profiles", [profile]);
        this.transitionTo("profile", profile);
      });
    }
  }
});
