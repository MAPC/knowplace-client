import Ember from 'ember';
import ResetScrollMixin from 'neighborhood-drawing-tool/mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  model: function() {
    return Ember.RSVP.hash({
      place: this.store.createRecord('place', {})
    });
  },
  actions: {
    savePlace: function(context) {
      // alert("bubbled");
      var user = this.get('session').get('account');
      var place = this.modelFor("places.create").place;
      var profile = this.modelFor("application");
      
      place.save().then((model) => {
        profile.set("place", place);
        profile.set("user", user);
        profile.save().then((responseProfile) => {
          if (profile.get("hasReport")) {
            this.transitionTo("profile", responseProfile);
          } else {
            this.transitionTo("reports.search");
          }
        });
      }, (error) => {
        console.log(error);
      });
    },
    relateProfile: function(profile_id, place) {
      var user = this.modelFor("application");
      console.log(this.get("session").get("account").id);
      this.store.findRecord('profile', profile_id).then((profile) => {
        place.save().then((place) => {
          profile.set("place", place);
          profile.save().then((profile) => {
            this.transitionTo("profile", profile);
          }, (error) => {
            console.log(error);
          });
        });
      });
    }
  }
});
