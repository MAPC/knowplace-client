module.exports = function(app) {
  var express = require('express');
  var reportRouter = express.Router();

  reportRouter.get('/', function(req, res) {
    res.send({
      'report': [
        {
            id: 1,
            title: "Using Ember CLI to create a Fixture Adapter.",
            author: "Ryan Christiani",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
        },
        {
            id: 2,
            title: "Ember is lots of fun",
            author: "Ryan Christiani",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
        },
        {
            id: 3,
            title: "Ember, Node, Express and You!",
            author: "Ryan Christiani",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
        }
    ]
    });
  });

  reportRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  reportRouter.get('/:id', function(req, res) {
    res.send({
      'report': {
            id: req.params.id,
            title: "Using Ember CLI to create a Fixture Adapter.",
            author: "Ryan Christiani",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
        }
    });
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
