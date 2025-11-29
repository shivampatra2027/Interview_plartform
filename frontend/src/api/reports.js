// frontend/src/api/reports.js
import api from "./axios";

export const reportsAPI = {
  // Generate a new report
  generateReport: async (reportData, token) => {
    const response = await api.post("/reports/generate", reportData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Get all user reports
  listUserReports: async (token) => {
    const response = await api.get("/reports", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Get report by ID
  getReportById: async (reportId, token) => {
    const response = await api.get(`/reports/${reportId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },

  // Get report for specific interview
  getReportForInterview: async (interviewId, token) => {
    const response = await api.get(`/reports/interview/${interviewId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
};
