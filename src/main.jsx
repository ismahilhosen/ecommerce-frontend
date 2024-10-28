import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./root";
import ErorrPage from "./ErorrPage";
import Home from "./page/Home";
import Register from "./page/Register";
import { Provider } from "react-redux";
import store from "./store";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
    errorElement:<ErorrPage></ErorrPage>,
    children:[
      { 
        path: "/", 
        element: <Home></Home>
      },
      {
        path: "/register",
        element:<Register></Register>
      }
      
    ],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
