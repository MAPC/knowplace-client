import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  tokenAttributeName: "token",
  identificationAttributeName: "email",
  authorize: function(jqXHR, requestOptions) {
    var secureData           = this.get('session.secure');
    if (secureData) {
      var userToken          = secureData[this.tokenAttributeName];
      var userIdentification = secureData[this.identificationAttributeName];
      if (this.get('session.isAuthenticated') && !Ember.isEmpty(userToken) && !Ember.isEmpty(userIdentification)) {
        var authData = this.tokenAttributeName + '="' + userToken + '", ' + this.identificationAttributeName + '="' + userIdentification + '"';
        jqXHR.setRequestHeader('Authorization', 'Token ' + authData);
      }
    }
  }
});

