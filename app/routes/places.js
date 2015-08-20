import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: false
    }
  },
  model: function(params) {
    return this.store.find("place", {q: params.q });
  },
  actions: { 
    search: function(context) {
      this.refresh();
    }
  }
});
