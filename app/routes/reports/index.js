import Ember from 'ember';

export default Ember.Route.extend({
  criteria: null,
  model: function() {
    return this.store.find('report');
  }
});
