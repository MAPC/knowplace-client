import Ember from 'ember';

export default Ember.Component.extend({
  closeModal: "",
  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');

      this.get('session').authenticate('authenticator:custom', { identification: data.identification, password: data.password }).then(
        () => {
          this.sendAction("closeModal");
        }, (error) => {
          var message = error.errors.join(", ");
          this.set('errorMessage', message);
        });
    },
    closeModal: function() {
      this.sendAction("closeModal");
    }
  }
});
