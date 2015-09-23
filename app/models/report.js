import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  official: DS.attr('boolean', { defaultValue: false }),
  profile: DS.hasMany('profile', { async: true }),
  dataPoints: DS.hasMany('data-point', { async: false }),
  dataCollections: DS.hasMany('data-collection', { async: false })
});
