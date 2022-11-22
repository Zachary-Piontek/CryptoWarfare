import { Router } from 'express';
import UserService from '../services/UserService.js';
import User from '../models/User.js';
import authenticate from '../middleware/authenticate.js';
import authorize from '../middleware/authorize.js';

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const user = await UserService.signUp(req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  })

  .post('/sessions', async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const sessionToken = await UserService.signIn({ email, password });
  
      res
        .cookie(process.env.COOKIE_NAME, sessionToken, {
          httpOnly: true,
          maxAge: ONE_DAY_IN_MS,
        })
        .json({ message: 'Signed in successfully!' });
    } catch (e) {
      next(e);
    }
  })

  .get('/me', authenticate, async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      next(e);
    }
              })

  .get('/', [authenticate, authorize], async (req, res, next) => {
    try {
      const users = await User.getAll();
      res.send(users);
    } catch (error) {
      next(error);
    }
  })

  .delete('/sessions', authenticate, async (req, res, next) => {  
    try {
      const { sessionToken } = req.cookies;
      const user = await UserService.signOut(sessionToken);
      res.clearCookie(process.env.COOKIE_NAME).json(user);
    } catch (e) {
      next(e);
    }
  })
  
;




