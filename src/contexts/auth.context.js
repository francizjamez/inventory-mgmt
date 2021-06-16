import { useHistory } from "react-router-dom";
import { logInWithEmail, signUpWithEmail } from "../firebase/auth.controller";

const { createContext, useState } = require("react");

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [signupData, setSignupData] = useState({});
  const history = useHistory();

  async function handleSignup(e) {
    e.preventDefault();

    try {
      await signUpWithEmail(signupData.email, signupData.password);
      history.push("/login");
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

  function passwordLoginChange(e) {
    setLoginData({ ...loginData, password: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await logInWithEmail(loginData.email, loginData.password);
      setUser(res);
      history.push("/");
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
    passwordLoginChange,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
