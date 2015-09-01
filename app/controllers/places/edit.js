import Ember from 'ember';

export default Ember.Controller.extend({
  drawEdit: "drawEdit",
  actions: {
    drawEdit:function(e) {
      alert(e);
    }
  }
});
