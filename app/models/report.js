import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  official: DS.attr('boolean', { defaultValue: false }),
  profile: DS.hasMany('profile', { async: true, polymorphic: true })
});
