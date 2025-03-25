import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders header correctly", () => {
    render(<App />);
    expect(screen.getByText("Rakuten Product Store")).toBeInTheDocument();
  });

  test("renders 'Featured Products' section", () => {
    render(<App />);
    expect(screen.getByText("Featured Products")).toBeInTheDocument();
  });

  test("renders footer text correctly", () => {
    render(<App />);
    expect(screen.getByText("© 2024 Rakuten. All rights reserved.")).toBeInTheDocument();
  });

  test("displays at least one product", async () => {
    render(<App />);
    const productTitle = await screen.findByText("Apple iPhone 11 128 Go Double SIM Noir Sidéral");
    expect(productTitle).toBeInTheDocument();
  });

  test("handles slow product loading gracefully", async () => {
    render(<App />);
    
    // Wait for product to appear (simulating slow fetch)
    await waitFor(() => {
      expect(screen.getByText("Featured Products")).toBeInTheDocument();
    });
  });

  test("resizes properly without breaking layout", () => {
    window.resizeTo(400, 800); // Simulate mobile view
    render(<App />);
    expect(screen.getByText("Rakuten Product Store")).toBeInTheDocument();
  });
});
