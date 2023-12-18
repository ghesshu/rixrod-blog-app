import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/layout/Layout";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";

//
import ViewPosts from "./routes/Posts/ViewPost";
import AllPosts from "./routes/Posts/AllPosts";
import EditPost from "./routes/Posts/EditPost";
import WritePosts from "./routes/Posts/WritePosts";



//

import AddUser from "./routes/Users/AddUser";
import EditUser from "./routes/Users/EditUser";
import AllUsers from "./routes/Users/AllUsers";
import ViewUser from "./routes/Users/ViewUser";

// To create ne route , follow the pattern in this this array
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      // Posts

      {
        path: "/write-posts",
        element: <WritePosts />,
      },

      {
        path: "/all-posts",
        element: <AllPosts />,
      },
      {
        path: "/edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "/view-posts:/id",
        element: <ViewPosts />,
      },

      // User
      {
        path: "/all-users",
        element: <AllUsers />,
      },
      {
        path: "/edit-user/:id",
        element: <EditUser />,
      },
      {
        path: "/view-user",
        element: <ViewUser />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
