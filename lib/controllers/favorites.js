const { Router } = require("express");
const Fave = require("../model/Fave");
const FavoriteService = require("../services/FavoriteService");

module.exports = Router()
    .post('/', async (req, res, next) => {
        FavoriteService.create(req.body)
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

    .put('/:id', async (req, res, next) => {
        Fave.update(req.params.id, req.body)
        .then((fave) => res.send(fave))
        .catch(next);
    })

    .delete('/:id', async (req, res, next) => {
        Fave.delete(req.params.id)
        .then((fave) => res.send(fave))
        .catch(next);
    })
