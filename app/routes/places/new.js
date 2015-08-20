import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('place');
  },
  actions: {
    savePlace(place) {
      place.save().then(() => {
        this.transitionTo('profile');
      }).catch(() => {
        alert("couldn't save place.");
      });
    }
  }
});
