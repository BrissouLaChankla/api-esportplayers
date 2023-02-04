var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const Team = require('../models/teams');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/teams', (req, res) => {
  Team.find().then(data => {
    res.json({'teams':data});
  })
});

router.get('/teamsByLeague/:league', (req, res) => {
    Team.find({'homeLeague.name':req.params.league}).then(data => {
      if(data.length){
        res.json({teams:data})
      } else {
        res.json("error, not correct league name")
      }
    })
});


router.get('/randomTeamByLeague/:league', (req, res) => {
  Team.countDocuments({'homeLeague.name':req.params.league}).exec(function(err, count) {
    // Get a random entry
    var random = Math.floor(Math.random() * count)
    
    // Again query all users but only fetch one offset by our random #
    Team.findOne({'homeLeague.name':req.params.league}).skip(random).exec(
          function (err, result) {
            res.json({team:result})
          })
  })


})

// router.delete('/clear', (req, res) => {
//   Team.deleteMany({players:[]}).then(data => {
//     console.log(data)
//   })
// })

module.exports = router;
