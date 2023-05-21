const express = require('express');
const Knex = require('knex');
const passport = require('passport');
const { jwtStrategy } = require('./config/passport')
const knex = require('knex');
const knexConfig= require('./config/knexfile')
const { Model } = require('objection');
const routes = require('./routes')
const app = express();
// parse json request body
app.use(express.json());
Model.knex(knex(knexConfig.development));
app.use('/v1' , routes)
// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);
module.exports = app;
