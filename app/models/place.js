import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  geom: DS.attr(),
  profile: DS.belongsTo('profile')
});
