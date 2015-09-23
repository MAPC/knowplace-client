import Ember from 'ember';

export default Ember.Component.extend({
  message: null,
  didInsertElement: function() {
    this.$('.modal-trigger').leanModal();
    this.$('#modal1').openModal();
  },
  actions: {
    closeModal: function() {
      this.$('#modal1').closeModal();
    }
  },
  willDestroyElement: function () {
    this.$('#modal1').closeModal();
  }
});
