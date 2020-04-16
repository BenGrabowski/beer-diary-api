require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const authRouter = require('./auth/auth-router');
const beersRouter = require('./beers/beers-router');

const app = express()

const PORT = process.env.PORT || 3000;

const morganOption = (NODE_ENV === 'production') 
? 'tiny'
: 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/beers', beersRouter)

module.exports = app;