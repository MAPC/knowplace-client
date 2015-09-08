import Ember from 'ember';

export default Ember.Component.extend({
  relateProfile: "relateProfile",
  savePlace: "savePlace",
  actions: {
    savePlace() {
      this.sendAction("savePlace", this.model);
    },
    relateProfile(profile_id) {
      this.sendAction('relateProfile', profile_id, this.model);
    }
  },
  didInsertElement: function() {
    this.$('.modal-trigger').leanModal();
  }
});
