// frontend/src/api/interview.js
import api from "./axios";

export const interviewAPI = {
  // Create a new interview
  createInterview: async (interviewData, token) => {
    const response = await api.post("/interview", interviewData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Get all user interviews
  getMyInterviews: async (token) => {
    const response = await api.get("/interview", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Get interview by ID
  getInterviewById: async (interviewId, token) => {
    const response = await api.get(`/interview/${interviewId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Start an interview
  startInterview: async (interviewId, token) => {
    const response = await api.post(`/interview/${interviewId}/start`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Submit answer to interview
  submitAnswer: async (interviewId, answerData, token) => {
    const response = await api.post(`/interview/${interviewId}/answer`, answerData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Complete interview
  completeInterview: async (interviewId, token) => {
    const response = await api.post(`/interview/${interviewId}/complete`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
};
