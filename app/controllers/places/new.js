import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveGeom(geom) {
      var that = this;
      alert("saveGeom Triggered");
      this.get('model').set('geometry', geom);
      this.get('model').set('name', this.get('name')).set('description', this.get('description'));
      this.get('model').save().then(function(model) {
          that.transitionToRoute("places.edit", model);
        }, function(error) {
          console.log(error);
        });
    }
  }
});
