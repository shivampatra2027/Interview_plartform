import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import InterviewPage from './pages/InterviewPage'
import ReportsPage from './pages/ReportsPage'
import FAQPage from './pages/FAQPage'
import ComponentsDemo from './pages/ComponentsDemo'
import AboutPage from './pages/AboutPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

const ProtectedRoute = ({ children }) => {
  return (
    <SignedIn>
      {children}
    </SignedIn>
  )
}

const AuthHeader = () => {
  return (
    <div className="fixed top-4 right-4 z-100 flex items-center gap-3">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-6 py-2.5 rounded-lg bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 shadow-lg">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      
      <SignedIn>
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 ring-2 ring-purple-500 ring-offset-2"
            }
          }}
        />
      </SignedIn>
    </div>
  )
}

function App() {
  return (
    <>
      <AuthHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/components" element={<ComponentsDemo />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/interview" 
          element={
            <ProtectedRoute>
              <InterviewPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/reports" 
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
