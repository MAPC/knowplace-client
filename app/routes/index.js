import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function (controller) {
    controller.set("criteria", null);
  }
});
