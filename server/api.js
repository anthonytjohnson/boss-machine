const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

// Import routers
const ideasRouter = require('./ideas.js');
const meetingsRouter = require('./meetings.js');
const minionsRouter = require('./minions.js');

// Mount routers
app.use('/ideas', ideasRouter);
app.use('/meetings', meetingsRouter);
app.use('/minions', minionsRouter);

module.exports = apiRouter;
