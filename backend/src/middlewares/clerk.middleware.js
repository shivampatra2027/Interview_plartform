// src/middlewares/clerk.middleware.js
import { clerkClient, clerkMiddleware } from '@clerk/express';

// Middleware to protect routes with Clerk authentication
export const requireAuth = clerkMiddleware((req, res, next) => {
  const { userId } = req.auth;
  
  if (!userId) {
    return res.status(401).json({ 
      success: false, 
      message: "Unauthorized - Please sign in" 
    });
  }
  
  next();
});

// Middleware to get Clerk user data
export const getClerkUser = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    
    if (userId) {
      const user = await clerkClient.users.getUser(userId);
      req.clerkUser = user;
    }
    
    next();
  } catch (error) {
    console.error('Error fetching Clerk user:', error);
    next();
  }
};

export { clerkMiddleware };
