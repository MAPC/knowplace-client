import Ember from 'ember';

export default Ember.Controller.extend({
  criteria: null,
  actions: {
    search: function() {
      this.transitionToRoute('places.search', {queryParams: {q: this.get("criteria") }});
    }
  }
});
