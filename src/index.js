const express = require('express')
const consign = require('consign')
const app = express()
const PORT = 3000

consign({ cwd: 'src' })
  .include('models')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)
