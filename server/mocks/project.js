module.exports = function(app) {
  var express = require('express');
  var projectRouter = express.Router();

  projectRouter.get('/', function(req, res) {
    res.send({project:{id: 1, number: 123, name: 'Fooshnickins'}});
  });

  projectRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  projectRouter.get('/:id', function(req, res) {
    res.send({
      'project': {
        id: req.params.id
      }
    });
  });

  projectRouter.put('/:id', function(req, res) {
    res.send({
      'project': {
        id: req.params.id
      }
    });
  });

  projectRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/projects', projectRouter);
};
