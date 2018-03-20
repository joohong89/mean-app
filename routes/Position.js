var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Position = require('../models/Position');
var moment = require('moment');

/* GET All Positions. */
router.get('/getAllPositions', function(req, res, next) {
  Position.find(function(err, data){
    if(err) return next(err);

    console.log(data);
    res.json(data);
  });
});


/* GET SINGLE POSITIONS BY ID */
router.get('/:id', function(req, res, next) {
  console.log('ID : ' + req.params.id);
  Position.findById(req.params.id).lean().exec(function (err, post) {
    if (err) return next(err);

    if(post){

      var entryDate = moment(post.entryDate).format('YYYY-MM-DD');
      var exitDate = moment(post.exitDate).format('YYYY-MM-DD');

      post.entryDate = entryDate;
      post.exitDate = exitDate;
      console.log("TEST 3 : " + entryDate);
      console.log("TEST 2 : " + exitDate);
      console.log("TEST : " + JSON.stringify(post));
    }

    res.json(post);
  });
});

/* SAVE POSITIONS */
router.post('/', function(req, res, next) {

  Position.create(req.body, function (err, post) {
    if (err){
      res.json(err);
      return;
    }
    res.json(post);
  });
});

/* UPDATE POSITION */
router.put('/:id', function(req, res, next) {
  Position.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POSITION BOOK */
router.delete('/:id', function(req, res, next) {
  Position.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
