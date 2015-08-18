import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("profile", params.profile_id);
  },
  actions: {
    setPlaceState: function(place) {
      this.modelFor('profile').set("place", place);
    },
    setReportState: function(report) {
      this.modelFor('profile').set("report", report);
    }
  }
});
