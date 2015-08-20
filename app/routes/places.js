import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model: function(params) {
    console.log(params);
    return this.store.find("place", { search: params.search });
  }
});
