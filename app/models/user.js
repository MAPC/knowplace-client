import DS from 'ember-data';

export default DS.Model.extend({
  profiles: DS.hasMany('profile')
});
