import { signOut, signUp, signIn } from "../services/users.js";
import { useNavigate } from "react-router-dom";

const handleSignUp = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const user = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  await signUp(user);

};

const handleSignIn = async (event) => {
    event.preventDefault();  
    const formData = new FormData(event.target);

    const user = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(user);
    await signIn(user);
};

const AuthDisplay = () => {
    const navigate = useNavigate();

    return (
        <div>
        <form onSubmit={handleSignUp}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button onClick={() => {
                navigate('/foos');
            }}>Sign Up</button>
        </form>
        <form onSubmit={handleSignIn}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button onClick={() => {
                navigate('/foos');
            }}>Sign In</button>
        </form>
        </div>
    );
    };


export default AuthDisplay;
    

