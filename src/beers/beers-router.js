const express = require('express');
const BeersService = require('./beers-service');
const { requireAuth } = require('../middleware/jwt-auth');

const beersRouter = express.Router();
const jsonBodyParser = express.json();

beersRouter
  .route('/')
  .all(requireAuth)
  //Get User's Beers
  .get(jsonBodyParser, (req, res, next) => {
      BeersService.getUsersBeers(
          req.app.get('db'),
          req.headers.user_id
      )
        .then(beers => {
            res.status(200).json(BeersService.serializeBeers(beers));
        })
        .catch(next);
  })
  //Add New Beer
//   .post()

module.exports = beersRouter;