import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, signUp, signIn } from "../services/users.js";
import './authdisplay.css';

export default function AuthDisplay(props) {
  const [form, setForm] = useState({ username: '', email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await signUp(form);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signIn(form);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      await signOut();
      navigate("/auth");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-display">
      <h2>Register</h2>
      <form onSubmit={handleSignUp}>
        <input 
        type="text" 
        name="username" 
        placeholder="username"
        value={form.username} 
        onChange={handleChange} />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleSignOut}>Sign Out</button>
      {error && <p>{error}</p>}
    </div>
  );
}


    

