import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Donate from "./pages/donatePage/donate";
import Profile from "./pages/profile/Profile";
import Posts from "./components/posts/posts";
import Community from "./pages/community/Community";
import Complaint from "./pages/Complaint/Complaint";
import History from "./pages/history/History";
import HomeNotLogin from "./pages/HomeNotLogin/HomeNotLogin";

function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </div>
      </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
      // return <Navigate to="/" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/donate",
          element: <Donate />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path:"/community",
          element:<Community/>
        }
        ,
        {
          path:"/complaint",
          element:<Complaint/>
        }
        ,
        {
          path:"/history",
          element:<History/>
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/withoutLogin",
      element: <HomeNotLogin />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;