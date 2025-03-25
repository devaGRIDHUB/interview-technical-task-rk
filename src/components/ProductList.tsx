import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import productData from "../data/products.json"; 

const ProductList: React.FC = () => {
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   
    setProducts(productData as Product[]); 
  }, []);

  return (
    <Container sx={{ minHeight: "calc(100vh - 120px)", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Featured Products
      </Typography>
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }} 
        sx={{ flexWrap: "wrap", justifyContent: "center" }} 
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard {...product} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
            No products available.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default ProductList;
