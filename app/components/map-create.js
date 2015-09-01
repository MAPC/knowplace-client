import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  saveGeom: "saveGeom",
  classNames: ['fill-map'],
  input_geom: function() {
    return this.get("geom");
  }.property("geom"),
  geojson: function() {
    return new L.geoJson(this.get("input_geom"));
  }.property("input_geom"),
  // drawnLayer: function() {
  //   var geometry = this.get('geometry');
  //   var drawnFeatureGroup = new L.FeatureGroup();
  //   geometry.eachLayer(function(layer) {
  //     drawnFeatureGroup.addLayer(layer);
  //   });
  //   console.log(drawnFeatureGroup);
  //   return drawnFeatureGroup;
  // }.property("geometry"),
  addLayer: function() {
    var featureGroup = this.get("featureGroup");
    var geojson = this.get("geojson");
    geojson.eachLayer(function(layer) {
      featureGroup.addLayer(layer);
    });
    // featureGroup.addLayer(this.get("geojson"));
  }.observes("geojson"),
  featureGroup: new L.FeatureGroup(),
  intersect: function() {
    return new L.geoJson(this.get("intersecting"));
  }.property("intersecting"),
  didInsertElement: function() {
    var that = this;
    // var geometry = this.get("geometry");
    // var geojson = this.get("geojson");
    // var drawnLayer = this.get("drawnLayer");
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

    if (this.get("geom") !== "") {
      this.addLayer();
    }

    // var intersect = this.get("intersect");
    // intersect.addTo(this.map);
    // var geojson = this.get("geojson");
    // geojson.addTo(this.map);
    // this.updateScope(); //not functional quite yet, needs to be dependent on existence
    var drawControl = new L.Control.Draw(options);
    this.map.addControl(drawControl);
    // drawnLayer.addTo(this.map);


    this.map.on('draw:created', function (e) {
        var layer = e.layer;
        featureGroup.addLayer(layer);

        // that.set("input_geom", layer.toGeoJSON());
        that.sendAction('saveGeom', featureGroup.toGeoJSON());
        console.log(featureGroup.toGeoJSON());
        // console.log(layer.toGeoJSON());
    });

    this.map.on('draw:deleted', function (e) {
      alert("deletion has occurred. Needs to bubble to model.");
    });

    this.map.on('draw:edited', function (e) {
      alert("edit has occurred. NEeds to bubble to model to persist");
    });

    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
    }).addTo(this.map);

  }
});
