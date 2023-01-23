import pool from '../database.js'

export default class Coin {
    id;
    user_id;
    coins_ids;

    constructor(row) {
        this.id = row.id;
        this.user_id = row.user_id;
        this.coins_ids = row.coins_ids;
    }

    static async getAll() {
        try {
            const { rows } = await pool.query('SELECT * FROM users_favorite_coins');
            return rows.map(row => new Coin(row));
        } catch (error) {
            console.log(error)
        }
    }

    static async getUserFavorites(user_id) {
        try {
            const { rows } = await pool.query('SELECT * FROM users_favorite_coins WHERE user_id = $1', [user_id]);
            return new Coin(rows[0] || [])
        } catch (error) {
            console.log(error)
        }
    }

    static async updateUserFavorites(user_id, newFavorites) {
        try {
            await pool.query('UPDATE users_favorite_coins SET coins_ids = $1 WHERE user_id = $2', [newFavorites, user_id]);
            return this.getUserFavorites(user_id)
        } catch (error) {
            console.log(error)
        }
    }
    
    static async addTotalUserFavorites(user_id, total) {
        try {
            await pool.query('UPDATE users_favorite_coins SET total = $1 WHERE user_id = $2', [total, user_id]);
            return this.getUserFavorites(user_id)
        } catch (error) {
            console.log(error)
        }
    }
}