// frontend/src/hooks/useAPI.js
import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

export const useAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getToken } = useAuth();

  const callAPI = async (apiFunction, ...args) => {
    setLoading(true);
    setError(null);
    
    try {
      // Get Clerk token
      const token = await getToken();
      
      // Call the API function with token as last argument
      const result = await apiFunction(...args, token);
      setLoading(false);
      return result;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMessage);
      setLoading(false);
      throw err;
    }
  };

  return { callAPI, loading, error, setError };
};
