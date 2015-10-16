import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  saveGeom: "saveGeom",
  drawCreate:"drawCreate",
  drawEdit:"drawEdit",
  drawDelete: "drawDelete",
  classNames: ['fill-map'],
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
  // input_geom: function() {
  //   return this.get("geom");
  // }.property("geom"),
  // geojson: function() {
  //   return new L.geoJson(this.get("input_geom"));
  // }.property("input_geom"),
  // geojson: function() {
  //   return new L.geoJson(this.get("geometry"));
  // }.property("geometry"),
  // addLayer: function() {
  //   var featureGroup = this.get("featureGroup");
  //   var geojson = this.get("geojson");
  //   geojson.eachLayer(function(layer) {
  //     featureGroup.addLayer(layer);
  //   });
  // },
  updateIntersecting: function() {
    var update = this.get('intersectingGroup');
    console.log("got an intersecting update:", update);
    update.clearLayers();
    update.addLayer(L.geoJson(this.get('underlying'), { style: this.get('styles').underlying }));
    this.map.fitBounds(update.getBounds());
    update.bringToBack();
  }.observes('underlying'),
  updateGeometry: function() {
    var update = this.get('featureGroup');
    console.log('got a geometry update:', update);
    update.clearLayers();
    L.geoJson(this.get('geometry')).eachLayer((layer) => {
      update.addLayer(layer.setStyle(this.get("styles").geometry));
    });
  }.observes('geometry'),
  // test: function() {
  //   alert(this.get('name')); //does this component have access to model properties?
  // }.observes('geometry'),
  featureGroup: new L.FeatureGroup(),
  intersectingGroup: new L.FeatureGroup(),
  // intersect: function() {
  //   return new L.geoJson(this.get("intersecting"));
  // }.property("intersecting"),
  didInsertElement: function() {
    console.log("drawn once");
    var that = this;
    var featureGroup = this.get("featureGroup");
    var intersectingGroup = this.get("intersectingGroup");
    this.map = L.map(this.$('#map').get(0)).setView([42.373611, -71.110556], 12);

    var options = {
        position: 'topright',
        draw: {
            polyline:false,
            polygon: {
                allowIntersection: false, // Restricts shapes to simple polygons
                drawError: {
                    color: '#e1e100', // Color the shape will turn when intersects
                    message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                },
                shapeOptions: {
                    color: '#000000'
                }
            },
            rectangle: false,
            marker:false,
            circle: false
        },
        edit: {
          edit: true,
          featureGroup: featureGroup
        }
    };

    featureGroup.addTo(this.map);
    intersectingGroup.addTo(this.map);



    // this.addLayer();

    var drawControl = new L.Control.Draw(options);
    this.map.addControl(drawControl);

    this.map.on('draw:created', (e) => {
      var layer = e.layer;
      featureGroup.addLayer(layer);

      this.sendAction('drawCreate', e.layer.toGeoJSON());

    });

    this.map.on('draw:edited', (e) => {
      console.log("Starting to edit");
      console.log(e.layers);
      var layers = e.layers;
      layers.eachLayer((layer) => {
        this.sendAction('drawEdit', layer.toGeoJSON());
      });
      // this.sendAction('drawEdit', e.layer.toGeoJSON());
    });

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
    }).addTo(this.map);

    $('.leaflet-draw-draw-polygon').tooltip({'data-tooltip': "Test"})

  }
});
