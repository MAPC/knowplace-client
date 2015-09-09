import Ember from 'ember';
import ResetScrollMixin from 'neighborhood-drawing-tool/mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  model: function() {
    return Ember.RSVP.hash({
      place: this.store.createRecord('place', {}),
      profiles: this.store.findAll('profile')
    })
  },
  actions: {
    savePlace: function(context) {
      // alert("bubbled");
      var place = this.modelFor("places.create").place;
      var profile = this.modelFor("application");
      place.save().then((model) => {
        // var profile = this.store.createRecord('profile', {});
        profile.set("place", place);
        profile.save().then((profile) => {
          this.transitionTo("profile", profile);
        });
        

      }, (error) => {
        console.log(error);
      });
    },
    relateProfile: function(profile_id, place) {
      console.log(profile_id, place.id);
      var user = this.modelFor("application");
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
      // console.log(profile.id);
      

    }
  }
});
