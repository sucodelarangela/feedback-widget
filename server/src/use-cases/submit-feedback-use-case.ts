import {FeedbacksRepository} from '../repositories/feedbacks-repository';

// data for submiting new feedbacks
// even though this interface looks the same as the one in feedbacks-repository.ts, it is related to a different layer of our application, so it's better to repeat them
interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

// to submit new feedbacks
export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const {type, comment, screenshot} = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    });
  }
}
