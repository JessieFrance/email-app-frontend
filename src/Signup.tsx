import React, { useState, useEffect } from "react";
import { BACKEND_API } from "./constants";
import FormNotification from "./FormNotification";

interface FormAlertType {
  status: FormStatus;
  title: string;
  message: string;
}

const initialFormState: FormAlertType = {
  status: "pending",
  title: "",
  message: "",
};

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formState, setFormState] = useState(initialFormState);
  const [show, setShow] = useState(false);

  // Show/reset form.
  useEffect(() => {
    if (!show) {
      setShow(true);
    } else {
      const timer = setTimeout(() => {
        setFormState(initialFormState);

        setEmail("");
        setPassword("");
      }, 3000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setFormState({
        status: "pending",
        title: "Loading",
        message: "Signing up...",
      });

      const response = await fetch(`${BACKEND_API}/signup`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setFormState({
          status: "success",
          title: "Success!",
          message: "Please check your email inbox and spam folders.",
        });
      } else {
        const json = await response.json();
        let message = "Something went wrong";
        if (json && json.message && typeof json.message === "string") {
          message = json.message;
        }
        setFormState({
          status: "error",
          title: "Error",
          message: `${message}`,
        });
      }
    } catch (err) {
      setFormState({
        status: "error",
        title: "Error",
        message: "Something went wrong",
      });
    }
  };

  const { status, title, message } = formState;

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              required={true}
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2"></p>
        </div>
        {show && (
          <div className="m-5">
            <FormNotification status={status} message={message} title={title} />
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
