import { signOut, signUp, signIn } from "../services/users.js";
import './authdisplay.css';

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

const hangleSignOut = async (event) => {
    event.preventDefault();
    await signOut();
};

const AuthDisplay = () => {

    return (
        <div className="auth-display">
        <form onSubmit={handleSignUp}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button>Sign Up</button>
        </form>
        <form onSubmit={handleSignIn}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button>Sign In</button>
        </form>
        <form onSubmit={hangleSignOut}>
            <button>Sign Out</button>
        </form>
        </div>
    );
    };


export default AuthDisplay;
    

