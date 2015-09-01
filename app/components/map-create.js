import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  saveGeom: "saveGeom",
  drawCreate:"drawCreate",
  drawEdit:"drawEdit",
  drawDelete: "drawDelete",
  classNames: ['fill-map'],
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
  featureGroup: new L.FeatureGroup(),
  intersect: function() {
    return new L.geoJson(this.get("intersecting"));
  }.property("intersecting"),
  didInsertElement: function() {
    var that = this;
    console.log("Did Insert Element");
    var featureGroup = this.get("featureGroup");

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
            marker:false
        },
        edit: {
          edit: true,
          featureGroup: featureGroup
        }
    };

    featureGroup.addTo(this.map);

    // this.addLayer();

    var drawControl = new L.Control.Draw(options);
    this.map.addControl(drawControl);

    this.map.on('draw:created', (e) => {
      var layer = e.layer;
      featureGroup.addLayer(layer);

      this.sendAction('drawCreate', e.layer.toGeoJSON());

    });

    this.map.on('draw:edited', (e) => {
      this.sendAction('drawEdit', e);
    });

    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
    }).addTo(this.map);

  }
});
