import React, { useContext } from "react";
import AuthContext from "../../contexts/auth.context";
import Button from "../common/Button";

export default function Login() {
  const auth = useContext(AuthContext);
  return (
    <div className="container mx-auto mt-5 bg-purple-800 text-white max-w-lg rounded-md">
      <form className="flex flex-col p-5 gap-5" onSubmit={auth.handleLogin}>
        <div className="flex flex-col">
          <label>Enter email</label>
          <input
            type="email"
            placeholder="Email"
            className="text-black"
            onChange={auth.emailLoginChange}
          />
        </div>
        <div>
          <div className="flex flex-col">
            <label>Enter password</label>
            <input
              type="password"
              placeholder="password"
              className="text-blue-900"
              onChange={auth.passwordLoginChange}
            />
          </div>
        </div>

        <Button className="self-center">Login</Button>
      </form>
    </div>
  );
}
