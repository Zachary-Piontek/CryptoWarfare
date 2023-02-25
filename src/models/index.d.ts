import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUsersFavoriteCoins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersFavoriteCoins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly coins_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersFavoriteCoins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersFavoriteCoins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly coins_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersFavoriteCoins = LazyLoading extends LazyLoadingDisabled ? EagerUsersFavoriteCoins : LazyUsersFavoriteCoins

export declare const UsersFavoriteCoins: (new (init: ModelInit<UsersFavoriteCoins>) => UsersFavoriteCoins) & {
  copyOf(source: UsersFavoriteCoins, mutator: (draft: MutableModel<UsersFavoriteCoins>) => MutableModel<UsersFavoriteCoins> | void): UsersFavoriteCoins;
}

type EagerCoins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly symbol?: string | null;
  readonly price?: number | null;
  readonly market_cap?: number | null;
  readonly percent_change_24h?: number | null;
  readonly favorite?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly symbol?: string | null;
  readonly price?: number | null;
  readonly market_cap?: number | null;
  readonly percent_change_24h?: number | null;
  readonly favorite?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coins = LazyLoading extends LazyLoadingDisabled ? EagerCoins : LazyCoins

export declare const Coins: (new (init: ModelInit<Coins>) => Coins) & {
  copyOf(source: Coins, mutator: (draft: MutableModel<Coins>) => MutableModel<Coins> | void): Coins;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly password_hash?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly password_hash?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}