/** @format */
import { useAuth } from "../AuthContext";


const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav>
      <h1>My App</h1>
      {isAuthenticated ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button>Login</button>
      )}
    </nav>
  );
};
