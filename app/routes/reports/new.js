import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('place');
  },
  actions: {
    saveReport(report) {
      report.save().then(() => {
        this.transitionTo('index');
      }).catch(() => {
        alert("couldn't save report.");
      });
    }
  }
});
