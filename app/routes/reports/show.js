import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord("report", params.place_id);
  }
});
