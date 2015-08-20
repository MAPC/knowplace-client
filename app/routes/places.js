import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  afterModel: function() {
    var place = this.modelFor("places").get("firstObject");
    this.transitionTo('places.show', place.id);
  },
  model: function(params) {
    return this.store.query("place", {name: params.q });
  },
  dosomething: function() {
    console.log("Refreshing");
  }.observes("queryParams.q.refreshModel"),
  actions: { 
    search: function() {
      // this.refresh();
    }
  }
});
