import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Root from "./root";
import ErorrPage from "./ErorrPage";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
    errorElement:<ErorrPage></ErorrPage>,
    children:[
      { 
        path: "/", 
        element: <Home></Home>
      }
    ],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
