/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    host: "http://localhost:4200",
    modulePrefix: 'neighborhood-drawing-tool',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
          'default-src': "'none'",
          'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
          'font-src': "'self'",
          'connect-src': "'self'",
          'img-src': "'self'",
          'report-uri':"'localhost'",
          'style-src': "'self' 'unsafe-inline'",
          'frame-src': "'none'"
        }
  }

  if (environment === 'development') {
    ENV.host = "http://localhost:4200/api"
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.host = "http://knowplace.dev.mapc.org";
    // Testem prefers this...
    // ENV.baseURL = '/';
    // ENV.locationType = 'none';

    // // keep test console output quieter
    // ENV.APP.LOG_ACTIVE_GENERATION = false;
    // ENV.APP.LOG_VIEW_LOOKUPS = false;

    // ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = "http://knowplace.live.mapc.org";

  }

  ENV['simple-auth'] = {
    crossOriginWhitelist: ['*'],
    authorizer: 'authorizer:custom',
    session:    'session:custom-session',
    store: 'simple-auth-session-store:local-storage'
  }

  ENV['simple-auth-devise'] = {
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    serverTokenEndpoint: ENV.host + "/users/sign_in",
    authorizer: 'simple-auth-authorizer:devise'
  };



  return ENV;
};
