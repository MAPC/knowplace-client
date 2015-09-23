import Ember from 'ember';
import Session from 'simple-auth/session';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord("place", params.place_id)
  },
  setupController: function() {
    this.controller.set('profiles', this.modelFor('places.create'));
    this.controller.set('model', this.modelFor('places.create.edit'));
  }
});
