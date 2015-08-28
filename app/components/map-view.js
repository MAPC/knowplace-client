import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  previousLayer: new L.featureGroup(),

  geometry: function () {
    return new L.geoJson(this.get("geom"));
  }.property('geom'),

  updateMap: function() {
    var previousLayer = this.get('previousLayer');
    var geometry = this.get('geometry');

    previousLayer.clearLayers();
    geometry.addTo(this.map);
    this.map.fitBounds(geometry.getBounds());
    this.set('previousLayer', geometry);

  }.observes('geometry'),

  didInsertElement: function() {
    //initial DOM rendering
    this.map = L.map(this.$('#map').get(0));
    
    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
    }).addTo(this.map);

    this.updateMap();

  }
});
