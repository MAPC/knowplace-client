import Ember from 'ember';

export default Ember.Component.extend({
  randomData: function() {
    if (this.get('data')) {
      return this.get('data').sort(function() { return 0.5 - Math.random() }).objectsAt([1,2,3]);
    }
  }.property('data')
});
