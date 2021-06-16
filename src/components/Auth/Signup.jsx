import React, { useContext } from "react";
import AuthContext, { AuthProvider } from "../../contexts/auth.context";
import Button from "../common/Button";

export default function Signup() {
  const {
    handleSignup,
    emailSignupChange,
    passwordSignupChange,
    confirmPasswordSignupChange,
  } = useContext(AuthContext);
  return (
    <div className="container mx-auto mt-5 bg-purple-800 text-white max-w-lg rounded-md">
      <form className="flex flex-col p-5 gap-5" onSubmit={handleSignup}>
        <div className="flex flex-col">
          <label>Enter email</label>
          <input
            type="email"
            placeholder="Email"
            className="text-black"
            onChange={emailSignupChange}
          />
        </div>
        <div>
          <div className="flex flex-col">
            <label>Enter password</label>
            <input
              type="password"
              placeholder="password"
              className="text-blue-900"
              onChange={passwordSignupChange}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <label>Confirm password</label>
            <input
              type="password"
              placeholder="confirm"
              className="text-blue-900"
              onChange={confirmPasswordSignupChange}
            />
          </div>
        </div>
        <Button type="submit" className="self-center">
          Sign up
        </Button>
      </form>
    </div>
  );
}
