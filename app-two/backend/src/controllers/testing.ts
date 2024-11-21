import express from 'express'
const router = express.Router()

router.post('/reset', (_request, response) => {
  response.status(204).end()
})

export default router
