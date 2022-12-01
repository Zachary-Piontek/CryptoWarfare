import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, signUp, signIn } from "../services/users.js";
import styles from './authdisplay.module.css';

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
    await signOut();
    navigate("/");
  };

  return (
    <div className={styles.authMainDiv}>
      <div className={styles.authDiv}>
      <h2 className={styles.loginFont}>Register</h2>
      <form className={styles.auth} onSubmit={handleSignUp}>
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
        <button className={styles.authButton} type="submit">Register</button>
      </form>
      </div>
      <div className={styles.authDiv}>
      <h2 className={styles.loginFont}>Sign In</h2>
      <form className={styles.auth} onSubmit={handleSignIn}>
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
        <button className={styles.authButton} type="submit">Sign In</button>
      </form>
      </div>
      <div className={styles.authDiv}>
      <button className={styles.authButton} onClick={handleSignOut}>Sign Out</button>
      {error && <p>{error}</p>}
      </div>
    </div>

  );
}


    

