-- Use this file to define your SQL tables.
-- The SQL in this file will be executed when you run `npm run setup-db`.
drop table if exists users;
drop table if exists coins;
drop table if exists users_favorite_coins;

create table users (
  id bigint generated always as identity primary key,
  username text not null,
  email text not null,
  password_hash text not null
);

create table coins (
  id bigint generated always as identity primary key,
  name text not null,
  symbol text not null,
  price numeric not null,
  market_cap numeric not null,
  percent_change_24h numeric not null,
  favorite boolean not null
);

create table users_favorite_coins (
  id bigint generated always as identity primary key,
	user_id bigint null,
	coins_ids text null,
  amount numeric null
);

insert into users (username, email, password_hash) 
values ('allCryptoGone', 'nocrypto@gmail.com', 'password');

insert into coins (name, symbol, price, market_cap, percent_change_24h, favorite)
values ('Bitcoin', 'BTC', 10000, 444444444444, 1, true);