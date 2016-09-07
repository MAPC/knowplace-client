import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('profiles', function() {
    this.route('new');
    this.resource('profile', { path: ':profile_id' }, function() {
      this.resource('reports', function() {
        // this.resource('report', { path: ':report_id' });
      });

    });
  });

  this.resource('places', function() {
    this.route('search', function()  {
      this.route('show', { path: ':place_id', queryParams: ['q'] });
    });
    this.resource('place', { path: ':place_id' });
    this.route('create', function() {
      this.route('new');
      this.route('edit', { path: '/:place_id/edit' });
    });
  });

  this.resource('reports', function() {
    this.route('search', function() {
      this.route('show', { path: ':report_id', queryParams: ['q'] });
    });
    this.resource('report', { path: ':report_id' });

    this.route('new');
  });

  this.route('logout');
  this.route('login');
  this.route('protected');
  this.route('about');
  this.resource('users', function() {
    this.route('show', { path: '/me' });
    this.route('new');
  });
});

export default Router;
