## Overview

This is a simple React application that simulates a product store, fetching product data from a local JSON file and displaying the products in a grid layout. The app is styled using Material-UI (MUI) components for a modern and responsive design. It features product cards that showcase various product details such as brand, title, pricing, and images.

##Link
https://devagridhub.github.io/interview-technical-task-rk/
![Capture d’écran 2025-03-25 092915](https://github.com/user-attachments/assets/9ffe423e-28ee-4783-996f-1bdb3dc7de60)


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI (MUI)**: A UI framework for styling React components.
- **TypeScript**: A superset of JavaScript that provides static typing.
- **JSON**: Used to simulate the product data that is "fetched" by the app.

###Features
1. implemented visual desigin of listing product using MUI - Card , CardContent , Typography , Box
2. data is load from json file 
3. ensure the type of data by tightly type anotation checking in ProductList
4. implement responsive design for varies resizing of page
5. implemented test cases to test with mock json data
     1.checking the json data field (brand , title , usedPrice , newPrice , ) present or not 
     2.does it render if some data missing
     3.checking the header and footer fetch or not
     4.checking atleast one product is fetch or not
     5.checking the img source is link or not



##File Structure 
/rakuten-product-store

├── /public

│   ├── index.html             # The main HTML file

│   └── /assets
│       └── logo.png           # Example image or other static assets
├── /src
│   ├── /components
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── ProductList.tsx    # Displays the list of products
|   |   ├── ProductCard.test.tsx    # test cases for product 
│   │   ├── Header.tsx         # Header component
│   │   └── Footer.tsx         # Footer component
│   ├── /data
│   │   └── products.json      # Static product data file
│   ├── /styles
│   │   └── App.css            # Global styles (if any)
│   ├── /types
│   │   └── index.d.ts         # TypeScript types (e.g., Product type)
│   ├── App.tsx                # Main React component
│   ├── App.test.tsx           # Test file for App.tsx
│   ├── index.tsx              # Entry point for the app
│   ├── reportWebVitals.ts     # Web vitals (optional)
│   └── setupTests.ts          # Setup file for testing (optional)
├── .gitignore                 # Git ignore file
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Project documentation (README)
└── package-lock.json          # Dependency lock file
