import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("profile", params.profile_id);
  },
  actions: {
    setPlaceState: function(place) {
      this.get("model").then(function() {
        value.set('place', place);
      }, function(error) {
        console.log("failure.");
      });
    },
    setReportState: function() {
      alert("Bubbled up!");
    }
  }
});
