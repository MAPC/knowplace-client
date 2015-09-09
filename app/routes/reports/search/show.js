import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    controller.set('profiles', this.modelFor('reports.search').profiles);
  }
});
