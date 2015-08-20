import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('profiles', function() {
    this.route('new');
    this.resource('profile', { path: ':profile_id' });
  });

  this.resource('places', function() {
    this.resource('place', { path: ':place_id' });
    this.route('search', { path: 'places/search/:dynamic' });
    this.route('new');
  });

  this.resource('reports', function() {
    this.resource('report', { path: '/:report_id' });
    this.route('new');
  });

  this.route('logout');
  this.route('login');
  this.route('protected');

});

export default Router;
