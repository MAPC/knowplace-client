import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function() {
      this.transitionToRoute('places.search', {queryParams: {q: this.get("criteria") }});
    }
  }
});
