import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders with a name", () => {
    render(<Greet name="Joel" />);
    const textElement = screen.getByText("Hello Joel");
    expect(textElement).toBeInTheDocument();
  });
});

describe.only("Only this", () => {
  test("Greet renders with a name", () => {
    render(<Greet name="Joel" />);
    const textElement = screen.getByText("Hello Joel");
    expect(textElement).toBeInTheDocument();
  });
});
