// import { useState } from "react";
// import Header from "./assets/components/Header/Header";
// import Footer from "./assets/components/Footer/Footer";
// import GetProducts from "./assets/components/Data/GetProducts";
// import Form from "./assets/components/Form/Form";
// import About from "./assets/components/About";
// import Layout from "./assets/pages/layout/layout";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProductPage from "./assets/pages/ProductPage/ProductPage";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement:<h1>ERROR!!!!</h1>,
//     children: [
//       {
//         path: "product",
//         element: <GetProducts />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "contact",
//         element: <Form />,
//       },

//     ],
//   },
//   {
//     path: "/product/:id",
//     element:<ProductPage />
//   }

// ]);

// function App() {
//   return (
//     <>
//       {/* <Header /> */}
//       <RouterProvider router={routes}></RouterProvider>
//       {/* <GetProducts /> */}
//     </>
//   );
// }

// export default App;


import GetProducts from "./assets/components/Data/GetProducts";
import Form from "./assets/components/Form/Form";
import About from "./assets/components/About";
import Layout from "./assets/pages/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./assets/pages/ProductPage/ProductPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>ERROR!!!!</h1>,
    children: [
      {
        path: "product",
        element: <GetProducts />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Form />,
      },
    ],
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
