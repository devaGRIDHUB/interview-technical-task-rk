import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../types";

const mockProduct: Product = {
  brand: "Apple",
  href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
  title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
  newPrice: "754 €",
  usedPrice: "720,99 €",
  image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
};

describe("ProductCard Component", () => {
  test("renders product details correctly", () => {
    render(<ProductCard {...mockProduct} />);

    // Check brand
    expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();
    
    // Check title
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    
    // Check new price
    expect(screen.getByText(mockProduct.newPrice)).toBeInTheDocument();
    
    // Check "Neuf" text
    expect(screen.getByText("Neuf")).toBeInTheDocument();

    // Check used price
    expect(screen.getByText(mockProduct.usedPrice)).toBeInTheDocument();

    // Check "Occasion dès"
    expect(screen.getByText("Occasion dès")).toBeInTheDocument();
  });

  test("renders product image correctly", () => {
    render(<ProductCard {...mockProduct} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProduct.image);
    expect(img).toHaveAttribute("alt", mockProduct.title);
  });

  test("renders correct link to product page", () => {
    render(<ProductCard {...mockProduct} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockProduct.href);
  });

  test("does not render if essential data is missing", () => {
    const incompleteProduct = {
      brand: "Apple",
      href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
      title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
      newPrice: "",
      usedPrice: "720,99 €",
      image: "",
    };

    render(<ProductCard {...(incompleteProduct as Product)} />);
    
    // Use queryByText to check that nothing is rendered
    expect(screen.queryByText(mockProduct.title)).not.toBeInTheDocument();
    expect(screen.queryByText(mockProduct.newPrice)).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
