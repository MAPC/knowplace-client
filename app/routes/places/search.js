import Ember from 'ember';
import ResetScrollMixin from 'neighborhood-drawing-tool/mixins/reset-scroll';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, ResetScrollMixin, {
  queryParams: {
    q: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },
  model: function(params) {
    params.paramMapping = {page: "page[number]",
                           perPage: "page[limit]",
                          total_pages: "record-count"};
    params["filter[search]"] = params.q;
    delete params.q;
    var secureData = this.get('session.secure');
    console.log(secureData);
    return this.findPaged("place", params);
  },
  resetController: function (controller) {
    var queryParams = controller.get('queryParams');
    queryParams.forEach(function (param) {
      controller.set(param, null);
    });
  },
  actions: { 
    savePlace: function(context) {
      // alert("bubbled");
      var place = context;
      var profile = this.modelFor("application");
      // place.save().then((model) => {
        // var profile = this.store.createRecord('profile', {});
      profile.set("place", place);
      profile.save().then((responseProfile) => {
        if (profile.get("hasReport")) {
          this.transitionTo("profile", responseProfile);
        } else {
          this.transitionTo("reports.search");
        }
        
      }, (error) => {
        console.log(error);
      });
        

      // }, (error) => {
      //   console.log(error);
      // });
    },
  }
});
