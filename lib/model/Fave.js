const pool = require("../utils/pool");

module.exports = class Fave {
    id;
    name;
    type;
    city;
    state;
    website;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.type = row.type;
        this.city = row.city;
        this.state = row.state;
        this.website = row.website;
    }


    static async insert({name, type, city, state, website}) {
        const { rows } = 
            await pool.query(`INSERT INTO favorites (name, type, city, state, website) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, type, city, state, website]);

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

            return new Fave(rows[0]);
    }

    static async update(id, fave) {
        const { rows } = 
            await pool.query(`UPDATE favorites SET name=$2, type=$3, city=$4, state=$5, website=$6 WHERE id=$1 RETURNING *`, [id, fave.name, fave.type, fave.city, fave.state, fave.website]);

            return new Fave(rows[0]);
    }

    static async delete(id) {
        const { rows } = 
            await pool.query(`DELETE FROM favorites WHERE id=$1 RETURNING *`, [id]);

            return new Fave(rows[0]);
    }
}
