import express from 'express';
import {prisma} from './prisma';

const app = express();

// Middleware
app.use(express.json());

app.post('/feedbacks', async (req, res) => {
  // Creating new data inside prisma 'feedback' table
  const {type, comment, screenshot} = req.body;

  const feedback = await prisma.feedback.create({
    // Using short syntax from destructuring above
    data: {
      type, // type: req.body.type
      comment, // comment: req.body.comment
      screenshot // screenshot: req.body.screenshot
    }
  });

  return res.status(201).json({data: feedback});
});

app.listen(3333, () => {
  console.log('HTTP server running');
});
