import DS from 'ember-data';
import { memberAction, collectionAction } from 'ember-api-actions';

const { attr } = DS;

export default DS.Model.extend({
  profiles: DS.hasMany('profile', { async: true }),
  sign_up: memberAction({ path: 'sign_up' }),
  email: DS.attr('string'),
  password: DS.attr('string'),
  token: DS.attr('string')
});
