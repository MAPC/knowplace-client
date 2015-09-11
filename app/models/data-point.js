import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  report: DS.belongsTo('report'),
  dataCollection: DS.belongsTo('data-collection')
});
