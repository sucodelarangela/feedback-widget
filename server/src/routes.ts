import express from 'express';
import nodemailer from 'nodemailer';
import {NodemailerMailAdapter} from './adapters/nodemailer/nodemailer-mail-adapter';
import {PrismaFeedbacksRepository} from './repositories/prisma/prisma-feedbacks-repository';
import {SubmitFeedbackUseCase} from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

// app from server.ts
routes.post('/feedbacks', async (req, res) => {
  // Creating new data inside prisma 'feedback' table
  const {type, comment, screenshot} = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

  return res.status(201).send();
});
