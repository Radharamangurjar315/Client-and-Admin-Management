import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Check if user is logged in
  const adminSession = localStorage.getItem('adminSession');
  
  if (!adminSession) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  try {
    const session = JSON.parse(adminSession);
    if (session.loggedIn) {
      return children;
    }
  } catch (error) {
    console.error('Invalid session:', error);
  }

  // Redirect to login if session is invalid
  return <Navigate to="/login" replace />;
}
