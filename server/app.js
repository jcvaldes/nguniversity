// const express = require('express')
import express from 'express'
import db from './models/index'

// creamos un servidor express
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to my API!')
})
            // variable de entorno
const PORT = process.env.PORT || 3000;

db.sequelize
  .sync()
  .then((data) => {
    console.log('Postgres connection has been established successfully: \x1b[32m%s\x1b[0m', 'online');
  })
  .catch((err) => {
    console.error('Unable to connect to the database Postgres:', err);
  });

// quedamos escuchando peticiones
const server  = app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Express server corriendo en el port ${PORT}: \x1b[32m%s\x1b[0m`, 'online');
  }
})