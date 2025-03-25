import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};

export default App;
