import {MailAdapter, SendMailData} from '../mail-adapter';
import nodemailer from 'nodemailer';

// Config for nodemailer from www.mailtrap.io
const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'e43d2efac2a37f',
    pass: '38a628e47f9030'
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    // Using mailtrap
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      // In dev env, this email will be automatically sent do mailtrap. But on prod env, it's necessary to use a real e-mail below
      to: 'Angela Caldas <batata@batatamail.com>',
      subject,
      html: body
    });
  }
}
