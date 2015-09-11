import Ember from 'ember';
import ResetScrollMixin from 'neighborhood-drawing-tool/mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
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
    return Ember.RSVP.hash({
      reports: this.store.find("report", {q: params.q, include: 'data-points,data-collections' })
    })
  },
  actions: { 
    saveReport: function(context) {
      var report = context;
      var profile = this.modelFor("application");
      // place.save().then((model) => {
      // var profile = this.store.createRecord('profile', {});
      profile.set("report", report);
      profile.save().then((responseProfile) => {
        console.log(profile.get("place").id)
        if (profile.get("hasPlace")) {
          this.transitionTo("profile", responseProfile);
        } else {
          this.transitionTo("places.search");
        }
      });
    },
    relateProfile: function(profile_id, report) {
      var user = this.modelFor("application");
      this.store.findRecord('profile', profile_id).then((profile) => {
        report.save().then((report) => {
          profile.set("report", report);
          profile.save().then((profile) => {
            this.transitionTo("profile", profile);
          }, (error) => {
            console.log(error);
          });
        });
      });
      // console.log(profile.id);
    }
  }
});
