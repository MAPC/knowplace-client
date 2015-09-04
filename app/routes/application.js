import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    return this.store.createRecord('profile', {});
  },
  actions: {
    setPlaceState: function(place) {
      alert("bubbled");
      this.modelFor('application').set("places", place);
    },
    setReportState: function(report) {
      this.modelFor('profile').set("report", report);
    },
    saveProfile: function() {

    }
  }
});
