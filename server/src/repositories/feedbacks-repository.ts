// Informing which data we need to create a feedback through an interface
export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string; // ?: (optional)
}

// exporting the interface with the methods/actions our app may execute with our feedbacks
export interface FeedbacksRepository {
  // create executes an assynchronous function and returns nothing (void)
  create: (data: FeedbackCreateData) => Promise<void>;
}
