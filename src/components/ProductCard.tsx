import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Product } from "../types"; 

const ProductCard: React.FC<Product> = ({ brand, href, title, newPrice, usedPrice, image }) => {
  if (!brand || !title || !newPrice || !usedPrice || !image) {
    return null; // 
  }

  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit" }}> {/* ✅ Clickable link */}
      <Card
        sx={{
          display: "flex",
          width: "100%", 
          maxWidth: 343,
          height: 152,
          alignItems: "center",
          border: "1px solid #ddd",
          padding: 2,
          overflow: "hidden", 
          transition: "transform 0.2s ease-in-out",
          "&:hover": { transform: "scale(1.02)", boxShadow: 3 }, // ✅ Smooth hover effect
        }}
      >
        
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: 120,
            height: 120,
            objectFit: "cover",
            borderRadius: 1,
            marginRight: 2, 
            flexShrink: 0, 
          }}
        />

        
        <CardContent sx={{ flex: 1, padding: "8px 0" }}>
          {/* Brand Name */}
          <Typography sx={{ color: "#696969", fontSize: 12 }}>{brand}</Typography>

          {/* Product Title */}
          <Typography sx={{ fontSize: 14, fontWeight: "bold", mb: 1 }}>{title}</Typography>

          {/* New Price with "Neuf" (aligned bottom and in red) */}
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "4px", mb: 1 }}>
            <Typography sx={{ color: "#D10000", fontSize: 20, fontWeight: "bold" }}>{newPrice}</Typography>
            <Typography sx={{ fontSize: 10, color: "#D10000", fontWeight: "bold", lineHeight: "20px" }}>Neuf</Typography>
          </Box>

          {/* Used Price with "Occasion dès" next to it */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: 14, color: "#333" }}>Occasion dès </Typography>
            <Typography sx={{ fontSize: 16, color: "#333", fontWeight: "bold", ml: "4px" }}>{usedPrice}</Typography>
          </Box>
        </CardContent>
      </Card>
    </a>
  );
};

export default ProductCard;
