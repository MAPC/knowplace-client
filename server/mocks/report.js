module.exports = function(app) {
  var express = require('express');
  var reportRouter = express.Router();

  reportRouter.get('/', function(req, res) {
    var json = {"data":[{"id":"1","type":"reports","attributes":{"title":"Transit Oriented Development","description":"This is the official MAPC approach to studying TOD","official":true,"tags":["transportation","equity","smart growth"]    }, "links":{"self":"/reports/1"}},{"id":"2","type":"reports","attributes":{"title":"Housing Production Plan","description":"This is the official MAPC approach to studying housing demand","official":true,"tags":["transportation","equity","smart growth"]    },"links":{"self":"/reports/2"}}],"included":[],"links":[{"id":1,"name":"Dudley Square","description":"The primary commercial center of the Roxbury neighborhood of Boston, at the intersection of Dudley Street and Washington Street.\n","geometry":{"type":"Polygon","coordinates":[[[-71.075366,42.328243],[-71.0660963,42.3236742],[-71.0718898,42.3066331],[-71.0721044,42.3191684],[-71.0750226,42.3247847],[-71.075366,42.328243]]]},"tags":["boston","roxbury","bus station","silver line"],"created_at":"2015-08-26T16:06:25.227Z","updated_at":"2015-08-26T16:06:25.227Z","completed":false},{"id":2,"name":"Jamaica Plain","description":"An up-and-coming neighborhood in the southern area of Boston.\n","geometry":{"type":"Polygon","coordinates":[[[-71.130454,42.3015491],[-71.1185664,42.299232],[-71.1189956,42.2951372],[-71.1113566,42.2948515],[-71.104576,42.3010413],[-71.0962933,42.3007238],[-71.0889119,42.3129747],[-71.093418,42.3205907],[-71.0875815,42.3276029],[-71.1036319,42.3335039],[-71.1071938,42.3232243],[-71.130454,42.3015491]]]},"tags":["boston","south","hipster"],"created_at":"2015-08-26T16:06:25.233Z","updated_at":"2015-08-26T16:06:25.233Z","completed":false}]};
    res.send(json);
  });

  reportRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  reportRouter.get('/:id', function(req, res) {
    var json = {"data":{"id":req.params.id,"type":"reports","attributes":{"title":"Transit Oriented Development","description":"This is the official MAPC approach to studying TOD","official":true,"tags":["transportation","equity","smart growth"]    }, "links":{"self":"/reports/1"}},"included":[]};
    res.send(json);
  });

  reportRouter.put('/:id', function(req, res) {
    res.send({
      'report': {
        id: req.params.id
      }
    });
  });

  reportRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/reports', reportRouter);
};
