// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UsersFavoriteCoins, Coins, Users } = initSchema(schema);

export {
  UsersFavoriteCoins,
  Coins,
  Users
};