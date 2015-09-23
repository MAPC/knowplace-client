module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': []
    });
  });

  usersRouter.post('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    var json = {"data":{"id":"2","type":"users","attributes":{"name":"Dudleyy Square", "email": "mgardner@mapc.org", "token": "softIceCream" }, "links":{"self":"/users/1"}},"included":[]};
    res.send(json);
  });

  usersRouter.post('/sign_in', function(req, res) {
    var error = { "errors": [ "Wrong password.", "Unknown Username" ] };
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    var json = {"token": "softIceCream", "email": "mgardner@mapc.org", "user_id": 1 };
    res.send(json).end();
  });

  usersRouter.get('/:id', function(req, res) {
    var json = {"data":{"id":req.params.id,"type":"users","attributes":{"name":"Matt", "email": "mgardner@mapc.org", "token": "softIceCream" }, "links":{"self":"/users/1"}},"included":[]};
    res.send(json);
  });

  usersRouter.patch('/:id', function(req, res) {
    var json = {"data":{"id":req.params.id,"type":"users","attributes":{"name":"Matt", "email": "mgardner@mapc.org", "token": "softIceCream" }, "links":{"self":"/users/1"}},"included":[]};
    res.send(json);
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
