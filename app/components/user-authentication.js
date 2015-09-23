import Ember from 'ember';

export default Ember.Component.extend({
  closeModal: "",
  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      console.log(data);
      this.get('session').authenticate('simple-auth-authenticator:devise', { data: {user_email: "mgardner@mapc.org", password: "password" }}).then(
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
