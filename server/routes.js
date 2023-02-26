/*******************************************************************************
 * Routes here belong to the API. All routes here assume API_PREFIX. In local
 * development, this is assumed to be /api/v1. See the Webpack configuration
 * (webpack.config.js) for the re-writes to accomplish that.
 *
 * Since API_PREFIX adds the /api/v1, you needn't do it here in your routes.
 ******************************************************************************/

import express from 'express'
// Here we demonstrate that JavaScript files can be included from TypeScript
// files on the server side.
import usersController from './controllers/users.js'
import favoritesController from './controllers/favorites.js'


export default () => {
  const prefixRouter = express.Router()
  // Think of the poor foos.
  prefixRouter.use('/users', usersController)
  prefixRouter.use('/favorites', favoritesController)

  return prefixRouter
}
