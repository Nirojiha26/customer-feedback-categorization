export interface Feedback {
  id: string;
  message: string;
  category: number;
  createdAt: string;
}

export interface CreateFeedbackDto {
  message: string;
}
