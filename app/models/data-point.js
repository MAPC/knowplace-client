import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  report: DS.hasMany('report'),
  dataCollection: DS.hasMany('data-collection')
});
