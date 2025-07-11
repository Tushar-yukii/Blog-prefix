import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, Login, Sighup } from "./components/index.js";
import AllPost from "./pages/AllPost.jsx";
import Post from "./pages/Post.jsx";


const router = BrowserRouter([
 {
  path: "/",
  element: <App />,
  children:[
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element:(
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      ),
    }
    {
      path:'/signup',
      element:(
        <AuthLayout authentication={false}>
          <Sighup />
        </AuthLayout>
      )
    }
    {
      path: "/all-posts",
      element:(
        <AuthLayout authentication>
          {" "}
          <AllPost />
       </AuthLayout>
      )
    }
    {
      path: "/add-post",
      element:(
        <AuthLayout authentication>
          {" "}
          <AddPost />
        </AuthLayout>
      )
    }
    {
      path: "/edit-post/:slug",
      element:(
        <AuthLayout authentication>
          {" "}
        </AuthLayout>
      )
    }
    {
      path: "/post/:slug",
      element : <Post />
    }
  ]
 }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
  <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);