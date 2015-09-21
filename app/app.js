import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.deprecate = function(){};
Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

// $(function() {
//     var token = $('meta[name="csrf-token"]').attr('content');
//     return $.ajaxPrefilter(function(options, originalOptions, xhr) {
//         return xhr.setRequestHeader('X-CSRF-Token', token);
//     });
// });

loadInitializers(App, config.modulePrefix);

export default App;
