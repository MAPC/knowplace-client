import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  // author: DS.attr('string'),
  // content: DS.attr('string'),
  started: function() {
    if (this.get("place.id") || this.get("report.id")) {
      return true;
    } else {
      return false;
    }
  }.property("place","report"),
  completed: function() {
    if(this.get("place.id") && this.get("report.id")) {
      return true;
    } else {
      return false;
    }
  }.property("place","report"),
  hasPlace: function() {
    if(this.get("place.id")) {
      return true;
    } else {
      return false;
    }
  }.property("place"),
  hasReport: function() {
    if(this.get("report.id")) {
      return true;
    } else {
      return false;
    }
  }.property("report"),
  place: DS.belongsTo('place', { async: true }),
  report: DS.belongsTo('report', { async: true }),
  user: DS.belongsTo('user', { async: true })
});