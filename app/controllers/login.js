import Ember from 'ember';
// import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend({
  // authenticator: 'simple-auth-authenticator:devise'
  actions: {
      authenticate: function() {
        var data = this.getProperties('identification', 'password');
        return this.get('session').authenticate('authenticator:custom', { identification: data.identification, password: data.password }).then(() => {
          this.transitionToRoute("application");
        });
      }
  }
});
