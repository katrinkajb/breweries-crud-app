const pool = require("../utils/pool");

module.exports = class Fave {
    id;
    name;
    type;
    city;
    state;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.type = row.type;
        this.city = row.city;
        this.state = row.state;
    }

    static async insert({name, type, city, state}) {
        const { rows } = 
            await pool.query(`INSERT INTO favorites (name, type, city, state) VALUES ($1, $2, $3, $4) RETURNING *`, [name, type, city, state]);

            return new Fave(rows[0]);
    }

    static async getAll() {
        const { rows } = 
            await pool.query(`SELECT * FROM favorites`);

            return rows.map((row) => new Fave(row));
    }

    static async getById(id) {
        const { rows } = 
            await pool.query(`SELECT * FROM favorites WHERE id=$1`, [id]);

            return rows.map((row) => new Fave(row));
    }

}
