import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('profiles', function() {
    this.route('new', function() {
      this.resource('places', function() {
        this.resource('place', { path: '/:place_id' });
        this.route('new');
      });
      
      this.resource('reports', function() {
        this.resource('report', { path: '/:report_id' });
        this.route('new');
      });
    });
  });
  this.resource('profile', { path: 'profiles/:profile_id' });
  
  

});

export default Router;
