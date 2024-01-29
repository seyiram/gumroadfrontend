import React, { useState } from "react";
import "./SignUpStyles.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import GumroadLogo from "../../assets/images/gumroad.svg";

interface UserCredentials {
  username: string;
  password: string;
}

const SignUp: React.FC = () => {
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
              <a href="/sign-in">Log in</a>
            </div>
          </div>
          <h1>
            Join over 166,260 creators who have earned over $917,976,620 on
            Gumroad selling digital products and memberships.
          </h1>
        </header>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="text"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className=""
          />
          <Input
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className=""
          />
          <Button className="form-submit-btn">Create Account</Button>
          <p className="terms-of-use">You agree to our <u>Terms of Use</u> and <u>Privacy Policy.</u></p>
        </form>
      </div>
      <aside className="signup-image-bg"></aside>
    </div>
  );
};

export default SignUp;
  