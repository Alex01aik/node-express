const express = require('express');
const bodyParser  = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leaderes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name +
        ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation  not supported on /leaderes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the leaderes!');
    });
leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will details of leader: ' + req.params.leaderId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaderes/:leaderId'
        + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.write('Update the leader: ' + req.params.leaderId);
        res.end('Will update the leader: ' + req.body.name
        + ' with datails: ' + req.params.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting leader: ' + req.params.leaderId)
    });

module.exports = leaderRouter;