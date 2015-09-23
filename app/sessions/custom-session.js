import Session from 'simple-auth/session';

export default Session.extend({
  account: function() {
    var user_id = this.get('secure.user_id');
    if (!Ember.isEmpty(user_id)) {
      return DS.PromiseObject.create({
        promise: this.container.lookup('store:main').find('user', user_id)
      });
    }
  }.property('secure.user_id')
});
