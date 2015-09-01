import Ember from 'ember';

export default Ember.Controller.extend({
  drawCreate: "drawCreate",
  actions: {
    drawCreate:function(geom) {
      var that = this;
      alert("saveGeom Triggered");
      this.get('model').set('geometry', geom);
      this.get('model').set('name', this.get('name')).set('description', this.get('description'));
      this.get('model').save().then((model) => {
        that.transitionToRoute("places.edit", model);
      }, (error) => {
        console.log(error);
      });
    },
  }
});
