import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  name: DS.attr('string'),
  geometry: DS.attr(),
  profile: DS.belongsTo('profile')
});
