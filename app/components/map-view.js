import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  previousLayer: new L.featureGroup(),
  geom: null,
  classNames: ['fill-map'],
  zoomControl: false,
  scrollWheelZoom: true,
  layers: {
    underlyingLayer: {
      geometry: null,
      previous: null,
    },
    drawnLayer: {
      geometry: null,
      previous: null,
    },
    placeLayer: {
      geometry: null,
      previous: null
    }
  },

  geometry: function () {
    return new L.geoJson(this.get("geom"));
  }.property('geom'),

  updateMap: function() {
    //this observer should be refactored. console logging to see how often this is triggered.
    console.log("Map component updated");

    var previousLayer = this.get('previousLayer');
    var geometry = this.get('geometry');

    previousLayer.clearLayers();
    geometry.addTo(this.map);
    this.map.fitBounds(geometry.getBounds());
    this.set('previousLayer', geometry);

  }.observes('geometry'),

  didInsertElement: function() {
    //initial DOM rendering
    this.map = L.map(this.$('#map').get(0), {
      zoomControl: this.get("zoomControl"),
      scrollWheelZoom: this.get("scrollWheelZoom")
    });
    
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd'
    }).addTo(this.map);

    if (this.get("geom") !== null) {
      this.updateMap();
    } else {
      this.map.locate({setView: true, maxZoom: 16});
    }
  }
});
