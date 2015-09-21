import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord("user");
  },
  actions: {
    register: function(user) {
      user.save().then((user) => {
          var secure = this.get('session.secure');
          secure.token = user.get('token');
          secure.email = user.get('email');
          console.log(secure.token);
          this.get('session').setup('simple-auth-authenticator:devise', secure, true);
      });
    }
  }
});
