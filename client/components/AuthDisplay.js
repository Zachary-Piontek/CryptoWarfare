import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, signIn } from "../services/users.js";
import styles from './authdisplay.module.css';

export default function AuthDisplay(props) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(form)
      .then(() => {
        navigate('/')
        window.location.reload()
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(form)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        <button className={styles.authButton} type="submit">Register Now</button>
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
    </div>
  );
}


    

