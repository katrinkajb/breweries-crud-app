const Fave = require("../model/Fave");

module.exports = class FavoriteService {
    static async create({ name, type, city, state }) {
        const newFave = await Fave.insert({ name, type, city, state });

        return newFave;
    }

    static async getAll() {
        const faves = await Fave.getAll();

        return faves;
    }
}
