import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Signup", () => {
  render(<App />);
  const title = screen.getByText("Sign Up");
  const email = screen.getByText("Email address");
  const password = screen.getByText("Password");
  const submit = screen.getByText("Submit");

  expect(title).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});
