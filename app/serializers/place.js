import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    underlying: {serialize: false}
    // occupation: {key: 'career'}
  }
});
