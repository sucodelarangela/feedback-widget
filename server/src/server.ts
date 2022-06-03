import express from 'express'
import { prisma } from './prisma'

const app = express()

// Middleware
app.use(express.json())

app.post('/feedbacks', (req, res) => {
  // Creating new data inside prisma 'feedback' table
  prisma.feedback.create({
    data: {
      type: req.body.type,
      comment: req.body.comment,
      screenshot: req.body.screenshot
    }
  })

  return res.send("Hello world")
})

app.listen(3333, () => {
  console.log('HTTP server running')
})