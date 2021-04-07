const { Router } = require("express");
const Fave = require("../model/Fave");
// const FavoriteService = require("../services/FavoriteService");

module.exports = Router()
    .post('/', async (req, res, next) => {
        Fave.create(req.body)
        .then((fave) => res.send(fave))
        .catch(next);
    })
