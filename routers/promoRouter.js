const express = require('express');
const bodyParser  = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promoes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promo: ' + req.body.name +
        ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation  not supported on /promoes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promoes!');
    });
promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will details of promo: ' + req.params.promoId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promoes/:promoId'
        + req.params.promoId);
    })
    .put((req, res, next) => {
        res.write('Update the promo: ' + req.params.promoId);
        res.end('Will update the promo: ' + req.body.name
        + ' with datails: ' + req.params.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting promo: ' + req.params.promoId)
});

module.exports = promoRouter;