import express, { json } from 'express'
import cors from 'cors'

import middleware from './util/middleware'

import testingRouter from './controllers/testing'
import pingRouter from './controllers/ping'

const app = express()
app.use(json())
app.use(cors())

app.use(middleware.requestLogger)

app.use('/api/testing', testingRouter)
app.use('/api/ping', pingRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app
