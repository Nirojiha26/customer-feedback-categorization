import axios from "axios";
import { Feedback, CreateFeedbackDto } from "../types/Feedback";

const api = axios.create({
  baseURL: "http://localhost:5086/api", // your backend URL
});

export const getFeedbacks = async (): Promise<Feedback[]> => {
  const response = await api.get<Feedback[]>("/Feedback");
  return response.data;
};

export const createFeedback = async (data: CreateFeedbackDto): Promise<Feedback> => {
  const response = await api.post<Feedback>("/Feedback", data);
  return response.data;
};
