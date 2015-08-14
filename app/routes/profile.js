import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("profile", params.profile_id);
  }
});
