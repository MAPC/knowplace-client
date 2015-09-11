import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  report: DS.belongsTo('report'),
  dataPoints: DS.hasMany('data-point', { async: false })
});
