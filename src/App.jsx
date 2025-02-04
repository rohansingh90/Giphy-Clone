import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Comoponets/LayOut/LayOut";
import Home from "./Comoponets/Home/Home";
import Category from "./Comoponets/Category/Category"; 
import SearchPage from './Comoponets/SearchPage/SearchPage'
import GifPage  from './Comoponets/GifPage/GifPage'
import Favorites from "./Comoponets/Favorites/Favorites";
import GifProvider from "./Comoponets/Context/GifContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:name",
        element: <Category />,
      },
      {
        path: '/search/:query',
        element: <SearchPage/>
      },
      {
        path: '/:type/:slug',
        element: <GifPage/>
      },
      {
        path: '/favorites',
        element: <Favorites/>
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
      <GifProvider>
      <RouterProvider router={router} />
      </GifProvider>
    </div>
  );
};

export default App;
