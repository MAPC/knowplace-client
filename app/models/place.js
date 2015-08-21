import DS from 'ember-data';
import { memberAction, collectionAction } from 'ember-api-actions';

const { attr } = DS;

export default DS.Model.extend({
  description: DS.attr('string'),
  name: DS.attr('string'),
  geometry: DS.attr(),
  profile: DS.belongsTo('profile', { async: false }),
  search: collectionAction({ path: 'search' })
});
