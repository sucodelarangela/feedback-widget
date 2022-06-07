import {prisma} from '../../prisma';
import {FeedbackCreateData, FeedbacksRepository} from '../feedbacks-repository';

// Creating a class that implements the methods from the interface. This way, if we change Prisma for another type of ORM (Sequelize, for instance), we may just create a new class for that ORM and our app will continue working properly
export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackCreateData) {
    // from const feedbacks in routes.ts
    await prisma.feedback.create({
      // Using short syntax from destructuring above
      data: {
        type, // type: req.body.type
        comment, // comment: req.body.comment
        screenshot // screenshot: req.body.screenshot
      }
    });
  }
}
