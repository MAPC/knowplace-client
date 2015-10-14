import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal: function() {
      $('#modal1').openModal();
    }
  }
});
