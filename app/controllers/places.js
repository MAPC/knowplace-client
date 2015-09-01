import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveGeom: function() {
      alert("Triggered!");
    },
    drawDelete: function() {
      alert("Triggered!");
    }
  }
});
