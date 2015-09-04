module.exports = function(app) {
  var express = require('express');
  var profileRouter = express.Router();

  profileRouter.get('/', function(req, res) {
    var json = {data:[{id:"1",type:"profiles",links:{self:"http://knowplace.dev.mapc.org/profiles/1"},attributes:{title:"Transit Oriented Development in Dudley Square"},relationships: {place: { data: { id: 1, type: "places" }, links:{self:"http://knowplace.dev.mapc.org/profiles/1/relationships/place",related:"http://knowplace.dev.mapc.org/profiles/1/place"}},report:{links:{self:"http://knowplace.dev.mapc.org/profiles/1/relationships/report",related:"http://knowplace.dev.mapc.org/profiles/1/report"}}}}],links:{first:"http://knowplace.dev.mapc.org/profiles?page%5Bnumber%5D=1&page%5Bsize%5D=10",last:"http://knowplace.dev.mapc.org/profiles?page%5Bnumber%5D=1&page%5Bsize%5D=10"}};
    res.send(json);
  });

  profileRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  profileRouter.get('/:id', function(req, res) {
    var json = {data:{id:req.params.id,type:"profiles",links:{self:"profiles/1"},attributes:{title:"Transit Oriented Development in Dudley Square"},relationships:{place:{ data: { type: "place", "id": 1 }, links:{self:"/profiles/1/relationships/place",related:"/profiles/1/place"}},report:{links:{self:"/profiles/1/relationships/report",related:"/profiles/1/report"}}}}};
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
