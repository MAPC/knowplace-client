import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  official: DS.attr('boolean', { defaultValue: false }),
  profile: DS.belongsTo('profile', { async: true })
});
