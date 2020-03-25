const express = require('express');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileOngController = require('./controllers/ProfileOngController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileOngController.index);

module.exports = routes;
