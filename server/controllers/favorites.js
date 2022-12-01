import { Router } from 'express'
import Favorite from '../models/Favorite.js'
import authenticate from '../middleware/authenticate.js'
import fetch from 'node-fetch'


const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export default Router()

    .get('/', authenticate,async (req, res, next) => {
        try {
            const favorites = await Favorite.getAll()
            res.status(200).json(favorites);
        } catch (error) {
            next(error);
        }
    })

    .get('/userfavorites',authenticate, async (req, res, next) => {
        try {
            const favorites = await Favorite.getUserFavorites(req.user.id)
            res.status(200).json(favorites);
        } catch (error) {
            next(error);
        }
    })
    
    .get('/coins/userfavorites',authenticate, async (req, res, next) => {
        try {
            const favorites = await Favorite.getUserFavorites(req.user.id)

            if(!favorites.coins_ids) return res.status(200).json([])

            const coins_res = await fetch(`${COINGECKO_API}&ids=${favorites.coins_ids}`)
            const coins_json = await coins_res.json()

            res.status(200).json(coins_json);

        } catch (error) {
            next(error);
        }
    })

    

    .post('/add/userfavorites',authenticate, async (req, res, next) => {
        const { coin_id } = req.body
        try {
            let { coins_ids } = await Favorite.getUserFavorites(req.user.id)
            
            coins_ids = coins_ids.split(',')
            const exist = coins_ids.find(id => id === coin_id)
            if(exist) coins_ids = coins_ids.filter(id => id !== coin_id)
            else coins_ids.push(coin_id)
            coins_ids = coins_ids.join(',')
                
            const updatedFavorites = await Favorite.updateUserFavorites(req.user.id, coins_ids)

            res.status(201).json(updatedFavorites)
        } catch (error) {
            next(error);
        }
    })

// export default Router()
    

//     .get('/favorites', async (req, res, next) => {
//         try {
//             const favorites = await FavoriteService.getAllFavorites();
//             res.send(favorites);
//         } catch (error) {
//             next(error);
//         }
//     })
//     .post('/:id/favorites', async (req, res, next) => {
//         try {
//             const favorite = await FavoriteService.addFavorite(req.body);
//             res.json(favorite);
//         } catch (e) {
//             next(e);
//         }
//     })
    
    
//     .delete('/favorites/:id', async (req, res, next) => {
//         try {
//             const favorite = await FavoriteService.deleteFavorite(req.params.id);
//             res.json(favorite);
//         } catch (e) {
//             next(e);
//         }
//     })


