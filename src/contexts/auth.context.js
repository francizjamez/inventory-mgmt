import { logInWithEmail, signUpWithEmail } from "../firebase/auth.controller";

const { createContext, useState } = require("react");

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [signupData, setSignupData] = useState({});

  async function handleSignup(e) {
    e.preventDefault();

    try {
      await signUpWithEmail(signupData.email, signupData.password);
    } catch (err) {
      alert(err);
    }
  }

  function emailSignupChange(e) {
    setSignupData({ ...signupData, email: e.target.value });
  }

  function passwordSignupChange(e) {
    setSignupData({ ...signupData, password: e.target.value });
  }

  function confirmPasswordSignupChange(e) {
    setSignupData({ ...signupData, confirmPassword: e.target.value });
  }

  function emailLoginChange(e) {
    setLoginData({ ...loginData, email: e.target.value });
  }

  function emailPasswordChange(e) {
    setLoginData({ ...loginData, password: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await logInWithEmail(signupData.email, signupData.password);
    } catch (err) {
      alert(err);
    }
  }

  const values = {
    user,
    handleSignup,
    emailSignupChange,
    passwordSignupChange,
    confirmPasswordSignupChange,
    emailLoginChange,
    emailPasswordChange,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
