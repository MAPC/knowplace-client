import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('profile').then(function(array) {
      return array.filter(function(record) { return !record.get('isDirty'); }).toArray().sort(function() { return 0.5 - Math.random() }).objectAt(1);
    });
  },
  resetController: function (controller) {
    controller.set("criteria", null);
  }
});
