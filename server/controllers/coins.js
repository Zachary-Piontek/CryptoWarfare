import { Router } from 'express';
import authenticate from '../middleware/authenticate.js';
import Coin from '../models/Coin.js';

export default Router()
.get('/:id', authenticate, async (req, res, next) => {
    try {
        const coin = await Coin.getById(req.params.id);
        res.send(coin);
    } catch (error) {
        next(error);
    }
})
    .get('/', authenticate, async (req, res, next) => {
        try {
            const coins = await Coin.getAll();
            res.send(coins);
        } catch (error) {
            next(error);
        }
    })


    .post('/:id/favorite', authenticate, async (req, res, next) => {
        try {
            const coin = await Coin.insert(req.body);
            res.send(coin);
        } catch (error) {
            next(error);
        }
    })
;