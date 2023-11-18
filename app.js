  const express = require('express')
  const cors = require('cors')
  const logger = require('morgan')
  const dotenv = require('dotenv');
  require('dotenv').config(); 


  const app = express()
  const port = process.env.PORT || 3000;

  dotenv.config();

  app.use(logger('dev'))
  app.use(express.json())
  app.use(cors())

  const indexRouter = require('./router/index')
  const apiRouter = require('./router/api')

  app.use('/index', indexRouter)
  app.use('/v1', apiRouter)
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  const {connect} = require('./db/connect.js')

  connect ()
