module.exports = function(app) {
  var express = require('express');
  var profileRouter = express.Router();

  profileRouter.get('/', function(req, res) {
    var json = {data:[{id:"1",type:"profiles",links:{self:"/api/profiles/1"},attributes:{title:"Transit Oriented Development in Dudley Square"},relationships: {place: { data: { id: 1, type: "places" }, links:{self:"/api/profiles/1/relationships/place",related:"/api/profiles/1/place"}},report:{links:{self:"/api/profiles/1/relationships/report",related:"/api/profiles/1/report"}}}}],links:{first:"/api/profiles?page%5Bnumber%5D=1&page%5Bsize%5D=10",last:"/api/profiles?page%5Bnumber%5D=1&page%5Bsize%5D=10"}};
    res.send(json);
  });

  profileRouter.get('/:id/place', function(req, res) {
    var json = {"data":{"id":"1","type":"places","links":{"self":"api/places/1"},"attributes":{"name":"Dudley Square","description":"The primary commercial center of the Roxbury neighborhood of Boston, at the intersection of Dudley Street and Washington Street.\n","geometry":{"type":"Polygon","coordinates":[[[-71.075366,42.328243],[-71.0660963,42.3236742],[-71.0718898,42.3066331],[-71.0721044,42.3191684],[-71.0750226,42.3247847],[-71.075366,42.328243]]]},"completed":false,"underlying":null,"geoids":null}}};
    res.send(json);
  });

  profileRouter.post('/', function(req, res) {
    var json = {
                    data: {
                        id: "1",
                        type: "profiles",
                        links: {
                            self: "/api/profiles/1"
                        },
                        attributes: {
                            title: "Transit Oriented Development in Dudley Square"
                        }
                    },
                    links: {
                        self: "/api/places/1"
                    }
                };

    res.send(json).end();
  });

  profileRouter.get('/:id', function(req, res) {
    var json = {data:{id:req.params.id,type:"profiles",links:{self:"profiles/1"},attributes:{title:"Transit Oriented Development in Dudley Square"},relationships:{place:{ data: { type: "place", "id": 1 }, links:{self:"/api/profiles/1/relationships/place",related:"/api/profiles/1/place"}},report:{links:{self:"/api/profiles/1/relationships/report",related:"/api/profiles/1/report"}}}}};
    res.send(json);
  });

  profileRouter.put('/:id', function(req, res) {
    res.send({
      'profile': {
        id: req.params.id
      }
    });
  });

  profileRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profiles', profileRouter);
};
