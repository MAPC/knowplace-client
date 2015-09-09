import Ember from 'ember';

export default Ember.Component.extend({
  saveReport: "saveReport",
  relateProfile: "relateProfile",
  actions: {
    saveReport() {
      this.sendAction("saveReport", this.model);
    },
    relateProfile(profile_id) {
      this.sendAction('relateProfile', profile_id, this.model);
    }
  },
  didInsertElement: function() {
    this.$('.modal-trigger').leanModal();
  }
});
