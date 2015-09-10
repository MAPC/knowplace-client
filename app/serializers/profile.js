import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    title: {serialize: false}
    // occupation: {key: 'career'}
  }
});
