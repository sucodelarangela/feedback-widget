import express from 'express';
import nodemailer from 'nodemailer';
import {prisma} from './prisma';

export const routes = express.Router();

// Config for nodemailer from www.mailtrap.io
const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'e43d2efac2a37f',
    pass: '38a628e47f9030'
  }
});

// app from server.ts
routes.post('/feedbacks', async (req, res) => {
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

  // Using mailtrap
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    // In dev env, this email will be automatically sent do mailtrap. But on prod env, it's necessary to use a real e-mail below
    to: 'Angela Caldas <batata@batatamail.com>',
    subject: 'Novo Feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  });

  return res.status(201).json({data: feedback});
});
