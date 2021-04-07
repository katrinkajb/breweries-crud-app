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

    static async getById(id) {
        const fave = await Fave.getById(id);

        return fave;
    }

    static async update(id, fave) {
        const fave = await Fave.update(id, fave.name, fave.type, fave.city, fave.state);

        return fave;
    }
}
