import Ember from 'ember';

export default Ember.Component.extend({
  value: null,
  margin: null,
  aggregator: null,
  valuePresentable: function() {
    return this.get("value");
  }.property("value"),
  marginPresentable: function() {
    return this.get("value");
  }.property("margin")
});
