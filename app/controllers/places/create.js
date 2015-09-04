import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    drawEdit:function(update) {
      console.log(update);
      this.get('model').set('geometry',update);
      this.get('model').save();
      Materialize.toast('Place Updated', 4000);
    },
    drawCreate:function(geom) {
      this.get('model').set('geometry', geom);
      this.get('model').set('name', this.get('name')).set('description', this.get('description'));
      this.get('model').save().then((model) => {
        this.transitionToRoute("places.create.edit", model);
      }, (error) => {
        console.log(error);
      });
    }
  }
});
