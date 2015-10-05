import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  init() {
    this.serverTokenEndpoint          = config['simple-auth'].serverTokenEndpoint;
    this.resourceName                 = config['simple-auth'].resourceName;
    this.tokenAttributeName           = config['simple-auth'].tokenAttributeName;
    this.identificationAttributeName  = config['simple-auth'].identificationAttributeName;
  },
  tokenAttributeName: "token",
  identificationAttributeName: "email",
  serverTokenEndpoint: "http://knowplace",

  restore(properties) {
    var _this            = this;
    var propertiesObject = Ember.Object.create(properties);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(propertiesObject.get(_this.tokenAttributeName)) && !Ember.isEmpty(propertiesObject.get(_this.identificationAttributeName))) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },

  authenticate(credentials) {
   var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url:         _this.serverTokenEndpoint,
        type:        'POST',
        data:        JSON.stringify({ email: credentials.identification, password: credentials.password }),
        contentType: 'application/vnd.api+json; charset=UTF-8'
      }).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr, status, error) {
        var response = JSON.parse(xhr.responseText);
        Ember.run(function() {
          reject(response.error);
        });
      });
    });
  },

  invalidate(data) {
    return Ember.RSVP.resolve();
  }
});
