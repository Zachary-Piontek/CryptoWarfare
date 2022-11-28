-- Use this file to define your SQL tables.
-- The SQL in this file will be executed when you run `npm run setup-db`.
drop table if exists users;
drop table if exists favorites;

create table users (
  id bigint generated always as identity primary key,
  username text not null,
  email text not null,
  password_hash text not null
);

create table favorites (
  id bigint generated always as identity primary key,
  favorites_id bigint not null,
  coin_name text not null,
  foreign key (favorites_id) references users(id)
);