import { Router } from 'express'
import Favorite from '../models/Favorite.js'
import authenticate from '../middleware/authenticate.js'
import authorize from '../middleware/authorize.js'

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

export default Router()
    

    .get('/favorites', async (req, res, next) => {
        try {
            const favorites = await FavoriteService.getAllFavorites();
            res.send(favorites);
        } catch (error) {
            next(error);
        }
    })
    .post('/:id/favorites', async (req, res, next) => {
        try {
            const favorite = await FavoriteService.addFavorite(req.body);
            res.json(favorite);
        } catch (e) {
            next(e);
        }
    })
    
    
    .delete('/favorites/:id', async (req, res, next) => {
        try {
            const favorite = await FavoriteService.deleteFavorite(req.params.id);
            res.json(favorite);
        } catch (e) {
            next(e);
        }
    })


