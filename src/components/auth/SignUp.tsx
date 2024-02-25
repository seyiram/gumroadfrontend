import React, { useState } from "react";
import "./SignUpStyles.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import GumroadLogo from "../../assets/images/gumroad.svg";
import useEmailPasswordValidation from "../../utils/useEmailPasswordValidation";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface UserCredentials {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const { validate, isError } = useEmailPasswordValidation();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate(credentials.email, credentials.password)) {
      console.log("isError", isError);
      console.log("Validation failed!");
      return;
    }

    try {
      await signup(credentials.email, credentials.password);
      navigate("/homepage");
    } catch (error) {
      console.error("Failed to sign up", error);
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
              <a href="/">Log in</a>
            </div>
          </div>
          <h1>
            Join over 166,260 creators who have earned over $917,976,620 on
            Gumroad selling digital products and memberships.
          </h1>
        </header>
        <form onSubmit={handleSignUpSubmit} className="signup-form">
          <Input
            label="Email"
            type="text"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className={isError.email ? "input-error" : ""}
          />
          <Input
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className={isError.password ? "input-error" : ""}
          />
          <Button>Create Account</Button>
          <p className="terms-of-use">
            You agree to our <u>Terms of Use</u> and <u>Privacy Policy.</u>
          </p>
        </form>
      </div>
      <aside className="signup-image-bg"></aside>
    </div>
  );
};

export default SignUp;
