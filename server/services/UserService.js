import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UserService {

  static async signUp({ username, email, password }) {
    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );

    const user = await User.insert({
      username,
      email,
      passwordHash,
    });

    return user;
  }

  static async signIn({ email, password = '' }) {
    try {
      const user = await User.getByEmail(email);

      if (!user) throw new Error('Invalid email');
      if (!bcrypt.compareSync(password, user.passwordHash))
        throw new Error('Invalid password');

        const token = jwt.sign({ ...user }, process.env.JWT_SECRET, {
          expiresIn: '1 day',
        });
      return token;
    } catch (error) {
      error.status = 401;
      throw error;
    }
  }

  static async signOut(sessionToken) {
    const user = await User.getBySessionToken(sessionToken);
    if (!user) throw new Error('Invalid session token');

    user.sessionToken = null;
    await user.update();

    return user;
  }

}