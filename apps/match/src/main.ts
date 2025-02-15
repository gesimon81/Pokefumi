/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import getListPokemons from './app/getListPokemons';
import getListTypes from './app/getListTypes';
import { getType, getTypeByName } from './app/getType';
import { getPokemon, getPokemonByName } from './app/getPokemon';
import { getRoundPokemon, getRoundPokemonByName } from './app/getRoundPokemon';

const app = express();

app.get('/api', (req, res) => {
  res.status(200).send({ message: 'Welcome to match!' });
});

app.get('/pokemons', async (req, res) => {
  try {
    res.status(200).send(await getListPokemons());
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});

app.get('/pokemons/:id', async (req, res) => {
  try {
    res.status(200).send(await getPokemon(Number(req.params.id)));
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});

app.get('/pokemons/name/:name', async (req, res) => {
  try {
    res.status(200).send(await getPokemonByName(req.params.name));
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});

app.get('/types', async (req, res) => {
  try {
    res.status(200).send(await getListTypes());
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});

app.get('/types/:id', async (req, res) => {
  try {
    res.status(200).send(await getType(Number(req.params.id)));
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});

app.get('/types/name/:name', async (req, res) => {
  try {
    res.status(200).send(await getTypeByName(req.params.name));
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});

app.get('/round/:id1/:id2', async (req, res) => {
  try {
    res.status(200).send(await getRoundPokemon(Number(req.params.id1), Number(req.params.id2)));
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});

app.get('/round/name/:name1/:name2', async (req, res) => {
  try {
    res.status(200).send(await getRoundPokemonByName(req.params.name1, req.params.name2));
  } catch (e) {
    res.status(e.response.status).send(e);
  }
});
const port = process.env.port || 3335;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
