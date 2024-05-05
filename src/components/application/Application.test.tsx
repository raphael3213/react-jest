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

    const termsElement = screen.getByRole("checkbox", {
      checked: false,
    });
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const pageHeadingElement = screen.getByRole("heading", {
      name: "Job App Form",
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();
  });

  test("Renders Correctly - checking by label text", () => {
    render(<Application />);

    const nameElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement).toBeInTheDocument();
  });
  test("Renders Correctly - checking by placeholder text", () => {
    render(<Application />);

    const nameElement = screen.getByPlaceholderText("Enter your name...");
    expect(nameElement).toBeInTheDocument();
  });
});
