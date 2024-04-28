import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe.only("Application", () => {
  test("renders correctly - checking by role", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const pageHeadingElement = screen.getByRole("heading", {
      name: "Job App Form",
    });
    expect(pageHeadingElement).toBeInTheDocument();
  });
});
