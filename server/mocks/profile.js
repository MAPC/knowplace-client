module.exports = function(app) {
  var express = require('express');
  var profileRouter = express.Router();

  profileRouter.get('/', function(req, res) {
    res.send({
      'profile': [
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

  profileRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  profileRouter.get('/:id', function(req, res) {

    res.send({
      'profile': {
                  id: req.params.id,
                  title: "Using Ember CLI to create a Fixture Adapter.",
                  author: "Ryan Christiani",
                  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
              }
    });
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
