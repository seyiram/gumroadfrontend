import React, { useState } from "react";
import "./SignInStyles.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import GumroadLogo from "../../assets/images/gumroad.svg";
import useEmailPasswordValidation from "../../utils/useEmailPasswordValidation";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

interface UserCredentials {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const { validate, isError } = useEmailPasswordValidation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/homepage";

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate(credentials.username, credentials.password)) {
      console.log("isError", isError);
      console.log("Validation failed!");
      return;
    }
    try {
      await login(credentials.username, credentials.password);
      navigate(from);
    } catch (error) {
      console.error("Failed to sign in", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <header className="signup-header">
          <div className="header-main">
            <a href="/homepage">
              <img src={GumroadLogo} alt="logo" />
            </a>
            <div className="header-actions">
              <a href="/sign-up">Sign up</a>
            </div>
          </div>
        </header>
        <form onSubmit={handleSignInSubmit} className="signup-form">
          <Input
            label="Email"
            type="text"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className={isError.email ? "input-error" : ""}
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
            className={isError.password ? "input-error" : ""}
          />

          <Button>Login</Button>
        </form>
      </div>
      <aside className="signup-image-bg"></aside>
    </div>
  );
};

export default SignIn;
