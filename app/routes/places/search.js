import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  // afterModel: function() {
  //   var place = this.modelFor("places").get("firstObject");
  //   console.log(this.queryParams);
  //   this.transitionTo('places.show', place.id);
  // },
  // routeHandler: function() {
  //   if (this.get('q') === '') {
  //     var place = this.modelFor("places").get("firstObject");
  //     this.transitionTo('places.show', place.id);
  //   } else {

  //   }
  // }.observes('q'),
  model: function(params) {
    return this.store.query("place", {filter: params.q });
  },
  actions: { 
    search: function() {
      // this.refresh();
    }
  }
});
