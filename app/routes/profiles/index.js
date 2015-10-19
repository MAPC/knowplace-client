import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  page: {
    refreshModel: true
  },
  model: function(params) {
    params.paramMapping = {page: "page[number]",
                           perPage: "page[limit]",
                          total_pages: "record-count"};
    params["filter[search]"] = params.q;
    delete params.q;
    return this.findPaged("profile", params);
  }
});
