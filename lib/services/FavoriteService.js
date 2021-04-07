const Fave = require("../model/Fave");
const { getWebsite } = require("../utils/breweries.js");

module.exports = class FavoriteService {
    static async create({ name, type, city, state }) {
        const website = await getWebsite(name);
        
        const newFave = await Fave.insert({ name, type, city, state, website });
        
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

    static async update(id, favorite) {
        const fave = await Fave.update(id, favorite.name, favorite.type, favorite.city, favorite.state, favorite.website);

        return fave;
    }

    static async delete(id) {
        const fave = await Fave.delete(id);

        return fave;
    }
}
