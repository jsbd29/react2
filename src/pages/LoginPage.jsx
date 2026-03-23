/** @format */
import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom"; // Added Navigate
import { useAuth } from "../AuthContext";

const LoginPage = () => {
  // 1. Hook initializations
  const { login, isAuthenticated } = useAuth(); // Destructured login here
  const navigate = useNavigate();
  const location = useLocation();

  // 2. Local state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3. Determine where to send the user after login
  const from = location.state?.from?.pathname || "/dashboard";

  // 4. Handle login if already authenticated
  if (isAuthenticated) return <Navigate to='/dashboard' replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call logic
    setTimeout(() => {
      login({ name: "John Doe", email: email });
      setIsSubmitting(false);

      // Redirect to the original destination (or dashboard)
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <div
      className='login-container'
      style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Checking credentials..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
