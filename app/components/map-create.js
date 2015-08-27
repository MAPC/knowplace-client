import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  saveGeom: "saveGeom",
  intersectingLayer: null,
  drawnLayer: null,
  drawnFeatureGroup: new L.FeatureGroup(),
  updateScope: function() {
    this.map.fitBounds(this.get("intersectingLayer")).getBounds();
  }.observes('intersectingLayer'),
  getLocation: function() {

  },
  makeSqlPolygon: function(coords) {
    var s = "ST_SETSRID(ST_PolygonFromText(\'POLYGON((";
    var firstCoord;
    coords.forEach(function(coord,i){
      s+=coord.lng + " " + coord.lat + ",";

      //remember the first coord
      if(i==0) {
        firstCoord = coord;
      }

      if(i==coords.length-1) {
        s+=firstCoord.lng + " " + firstCoord.lat;
      }
    });
    s+="))\'),4326)"
    return s;
  },
  didInsertElement: function() {
    var that = this;
    var drawnLayer = new L.FeatureGroup();
    var drawnFeatureGroup = new L.FeatureGroup();
    this.map = L.map(this.$('#map').get(0)).setView([42.373611, -71.110556], 12);
    
    var options = {
        position: 'topright',
        draw: {
            polyline:true,
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
            circle: false, // Turns off this drawing tool
            rectangle: {
                shapeOptions: {
                    clickable: false
                }
            },
            marker:false
        },
        featureGroup: drawnFeatureGroup,
        edit: {
          edit: true,
          featureGroup: drawnFeatureGroup
        }
    };

    var drawControl = new L.Control.Draw(options);
    this.map.addControl(drawControl);
    this.map.addLayer(drawnFeatureGroup);
    var customPolygon;
    this.map.on('draw:created', function (e) {
        //hide the arrow

        var type = e.layerType,
            layer = e.layer;

        drawnLayer=e.layer;
        that.set("drawnLayer", layer.toGeoJSON());
        drawnFeatureGroup = e;
        // that.sendAction('getPlaceGeom', that.get("drawnLayer"));

        var coords = e.layer._latlngs;
        customPolygon = that.makeSqlPolygon(coords);
        // Do whatever else you need to. (save to db, add to map etc)
        var queryTemplate = 'https://wilburnforce.cartodb.com/api/v2/sql?q=SELECT the_geom FROM census_tracts a WHERE ST_INTERSECTS(' + customPolygon + ', a.the_geom)&format=geojson';
        $.getJSON(queryTemplate, function(response) {
          var serializedResponse = L.geoJson(response);
          that.set("intersectingLayer", serializedResponse);
          L.geoJson(response).addTo(that.map);
          that.map.addLayer(layer);
          that.sendAction('saveGeom', that.get("drawnLayer"));
        });
    });

    
    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
    }).addTo(this.map);
  }
});
