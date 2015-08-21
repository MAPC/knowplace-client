import Ember from 'ember';
// import atatus from 'bower_components/atatus-js/atatus.min.js';

export default Ember.Component.extend({
  didInsertElement: function () {
    atatus.config('054957fc2cf546cfbc78c14de99ae336').install();
    atatus.notify(new Error('Test Atatus Setup'));
  }
});
