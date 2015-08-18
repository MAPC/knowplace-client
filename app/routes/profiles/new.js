import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    instantiateProfile: function() {
      this.store.createRecord('profile', {});
    }
  }
});
