import Ember from 'ember';
// import ClipperLib from 'npm:js-clipper';

export default Ember.Component.extend({
  geom: null,
  geoJsonLayer: null,
  initialize: function() {
    console.log("Initialized");
  },
  updateMap: function() {
    var geoJsonLayer = this.get('geoJsonLayer');
    var data = this.get('geom.geometry');
    geoJsonLayer.clearLayers();
    geoJsonLayer.addData(data);

  }.observes('geom'),
  updateScope: function() {
    this.map.fitBounds(this.geoJsonLayer.getBounds());
  }.observes('geom'),
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
    this.map = L.map(this.$('#map').get(0));

    var geoJsonLayer = L.geoJson().addTo(this.map);

    this.set('geoJsonLayer', geoJsonLayer);
    var data = this.get('geom.geometry');
    geoJsonLayer.addData(data);
    this.map.fitBounds(geoJsonLayer.getBounds());
    this.map.invalidateSize();
    
    L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      subdomains: 'abcd',
    }).addTo(this.map);
  }
});
