import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord("place", params.place_id);
  },
  renderTemplate: function () {
    this.render('places/create/new')
  }
});
