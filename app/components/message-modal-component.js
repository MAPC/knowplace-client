import Ember from 'ember';

export default Ember.Component.extend({
  message: null,
  didInsertElement: function() {
    this.$('.modal-trigger').leanModal();
    this.$('#modal1').openModal();
  }
});
