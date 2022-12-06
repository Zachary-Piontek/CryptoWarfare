import pool from '../database.js'

export default class User {
  id;
  username;
  email;
  #passwordHash;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.email = row.email;
    this.#passwordHash = row.password_hash;
  }

  static async insert({ username, email, passwordHash }) {
    try {
      const { rows } = await pool.query(`INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *`, [username, email, passwordHash]);
      const registredUser = rows[0]

      await pool.query(`INSERT INTO users_favorite_coins (user_id,coins_ids) VALUES ($1, $2)`, [registredUser.id, ''])

      return new User(registredUser);
    } catch (error) {
      console.log(error)
    }

  }

  static async getByEmail(email) {
    try {
      const { rows } = await pool.query(`SELECT * FROM users WHERE email=$1 `, [email]);
      return new User(rows[0] || []);

    } catch (error) {
      console.log(error);
    }
  }

  get passwordHash() {
    return this.#passwordHash;
  }

  static async getAll() {
    try {
      const { rows } = await pool.query('SELECT * FROM users');
      return rows.map((row) => new User(row));
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(id) {
    try {
      const { rows } = await pool.query(`DELETE FROM users WHERE id=$1 RETURNING *`, [id]);
      return new User(rows[0] || []);
    } catch (error) {
      console.log(error);
    }
  }
}