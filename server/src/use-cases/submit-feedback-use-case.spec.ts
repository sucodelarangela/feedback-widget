// example test. Run with npm run test
// test('sum 2 + 2', () => {
//   expect(2 + 2).toBe(4);
// });

import {SubmitFeedbackUseCase} from './submit-feedback-use-case';

// using spy functions
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  // {create: async () => {}}, // mock/fake dependency
  // {sendMail: async () => {}} // mock/fake dependency
  {create: createFeedbackSpy},
  {sendMail: sendMailSpy}
);

// creating a suite of tests
describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example content',
        screenshot: 'data:image/png;base64,sdih9n283dhai82'
      })
    ).resolves.not.toThrow(); // solve the code and not throw an error

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without a type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'example content',
        screenshot: 'data:image/png;base64,sdih9n283dhai82'
      })
    ).rejects.toThrow(); // reject the code and throw an error
  });

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,sdih9n283dhai82'
      })
    ).rejects.toThrow(); // reject the code and throw an error
  });

  it('should not be able to submit a feedback with an invalid screenshot format', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Any comment',
        screenshot: 'test.jpg'
      })
    ).rejects.toThrow(); // reject the code and throw an error
  });
});
