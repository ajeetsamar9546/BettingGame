import React from 'react'
import { createBrowserRouter,Navigate } from "react-router-dom";
import Home from './Home/Home';

const App = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
      
  },
  {
    path:"*",
    element:<Navigate to="/" replace />
},
]);

export default App


