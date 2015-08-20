import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    test: {
      refreshModel: true
    }
  },
  model: function(params) {
    console.log(params);
    return this.store.find("place", params.place_id, { name: 1 });
  }
});
