import React, { useState } from "react";
import "./SignInStyles.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import GumroadLogo from "../../assets/images/gumroad.svg";

interface UserCredentials {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <header className="signup-header">
          <div className="header-main">
            <img src={GumroadLogo} alt="logo" />
            <div className="actions">
              <a href="/sign-up">Sign up</a>
            </div>
          </div>
        </header>
        <form onSubmit={handleSubmit} className="signup-form">
          <Input
            label="Email"
            type="text"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <div className="password-label-row">
            <label htmlFor="password" className="password-label">
              Password
            </label>
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Your Password?
            </a>
          </div>
          <Input
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />

          <Button className="form-submit-btn">Login</Button>
        </form>
      </div>
      <aside className="signup-image-bg"></aside>
    </div>
  );
};

export default SignIn;
