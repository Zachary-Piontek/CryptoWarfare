import pool from '../database.js'

export default class Coin {
    id;
    name;
    symbol;
    price;
    marketCap;
    percent_change_24h;
    favorite;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.symbol = row.symbol;
        this.price = row.price;
        this.marketCap = row.market_cap;
        this.percent_change_24h = row.percent_change_24h;
        this.favorite = row.favorite;
    }

    static async getAll() {
        const { rows } = await pool.query(
            'SELECT * FROM coins'
        );
            console.log(rows);
        return rows.map(row => new Coin(row));
    }

    static async getById(id) {
        const { rows } = await pool.query(
            'SELECT * FROM coins WHERE id = $1',
            [id]
        );

        if (!rows[0]) throw new Error(`No coin with id ${id}`);
            console.log(rows[0]);
        return new Coin(rows[0]);
    }

    static async insert(favorite) {
        const { rows } = await pool.query(
            'INSERT INTO coins (favorite) VALUES ($1) RETURNING *',
            [favorite.favorite]
        );
            console.log(rows[0]);
        return new Coin(rows[0]);
    }
}
