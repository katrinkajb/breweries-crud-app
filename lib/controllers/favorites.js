const { Router } = require("express");
const Fave = require("../model/Fave");
// const FavoriteService = require("../services/FavoriteService");

module.exports = Router()
    .post('/', async (req, res, next) => {
        Fave.insert(req.body)
        .then((fave) => res.send(fave))
        .catch(next);
    })

    .get('/', async (req, res, next) => {
        Fave.getAll()
        .then((fave) => res.send(fave))
        .catch(next);
    })

    .get('/:id', async (req, res, next) => {
        Fave.getById(req.params.id)
        .then((fave) => res.send(fave))
        .catch(next);
    })
