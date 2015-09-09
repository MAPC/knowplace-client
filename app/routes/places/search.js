import Ember from 'ember';
import ResetScrollMixin from 'neighborhood-drawing-tool/mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model: function(params) {
    // q should be "filter[name]"
    return this.store.find("place", {q: params.q });
  },
  actions: { 
    savePlace: function(context) {
      // alert("bubbled");
      var place = context;
      var profile = this.modelFor("application");
      // place.save().then((model) => {
        // var profile = this.store.createRecord('profile', {});
      profile.set("place", place);
      profile.save().then((profile) => {
        this.transitionTo("profile", profile);
      });
        

      // }, (error) => {
      //   console.log(error);
      // });
    },
  }
});
