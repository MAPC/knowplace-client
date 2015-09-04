import DS from 'ember-data';
import { memberAction, collectionAction } from 'ember-api-actions';

const { attr } = DS;

export default DS.Model.extend({
  description: DS.attr('string'),
  name: DS.attr('string'),
  geometry: DS.attr(),
  // intersecting: DS.attr(),
  underlying: DS.attr(),
  test_data: DS.attr(),
  completed: DS.attr('boolean', { defaultValue: false }),
  profile: DS.hasMany('profile', { async: true }),
  search: collectionAction({ path: 'search' })
});
