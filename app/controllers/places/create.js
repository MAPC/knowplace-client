import Ember from 'ember';

export default Ember.Controller.extend({
  content: {},
  place: {},
  actions: {
    drawCreate:function(geom) {
      this.get('model.place').set('geometry', geom);
      this.get('model.place').set('name', this.get('name')).set('description', this.get('description'));
      this.get('model.place').save().then((model) => {
        this.transitionToRoute("places.create.edit", model);
      }, (error) => {
        var message = error.errors.join(", ");
        this.set('errorMessage', message);
      });
    },
    drawEdit:function(update) {
      console.log(update);
      this.get('model.place').set('geometry',update);
      this.get('model.place').save();
      Materialize.toast('Place Updated', 4000);
    },
    savePlace: function(context) {
      alert("controller has place");
    }
  }
});
