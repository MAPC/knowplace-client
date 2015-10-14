import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  previousLayer: new L.featureGroup(),
  previousIntersectinGeos: new L.featureGroup(),
  // geomo: null,
  // underlying: null,
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
  styles: {
    underlying: {
      fillColor: "#ff00ff",
      fillOpacity: .5,
      color: "#ff00ff",
      weight: 3
    },
    geometry: {
      fillColor: "#23b9a9",
      fillOpacity: .8,
      stroke: false,
      lineCap: "round",
      lineJoin: "round"
    }
  },
  intersectingGeos: function() {
    console.log("intersectingGeos triggered");
    return new L.geoJson(this.get("underlying"), { style: this.get('styles').underlying });
  }.property("underlying"),

  geometry: function () {
    console.log("geometry property triggered");
    return new L.geoJson(this.get("geomo"), { style: this.get('styles').geometry });
  }.property('geomo'),

  updateMap: function() {
    //this observer should be refactored. console logging to see how often this is triggered.
    console.log("updateMap");

    var previousLayer = this.get('previousLayer');
    var previousIntersectinGeos = this.get('previousIntersectinGeos');
    var intersectingGeos = this.get('intersectingGeos');
    var geometry = this.get('geometry');

    previousLayer.clearLayers();
    previousIntersectinGeos.clearLayers();
    
    intersectingGeos.addTo(this.map);
    geometry.addTo(this.map);

    if (this.get("underlying")) {
      console.log(intersectingGeos);
      var bounds = intersectingGeos.getBounds();
      this.map.fitBounds(bounds);  
      if(this.get("offset")) {
        var offset = this.map.getSize().x*0.2;
        this.map.panBy(new L.Point(-offset, 0), {animate: false});
      }
    } else {
      // this.map.fitBounds(geometry.getBounds());
    }
    


    this.set('previousLayer', geometry);
    this.set('previousIntersectinGeos', intersectingGeos);

  },

  triggerRefresh: function() {
    console.log("triggerRefresh");
    this.updateMap();
  }.observes('geomo'),

  didInsertElement: function() {
    //initial DOM rendering
    console.log("didInsertElement");
    this.map = L.map(this.$('#map').get(0), {
      zoomControl: this.get("zoomControl"),
      scrollWheelZoom: this.get("scrollWheelZoom")
    });
    
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd'
    }).addTo(this.map);
    // this.map.setView([42.373611, -71.110556], 12);
    this.updateMap();

  },
  willDestroyElement: function() {
    console.log("willDestroyElement");
    this.map.remove();
  }
});
