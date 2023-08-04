import Home from "./pages/home/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import Projects from "./pages/projects/Projects";
import Books from "./pages/books/Books";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Book from "./pages/book/Book";
import Project from "./pages/project/Project";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          {/* <div className="menuContainer">
            <Menu />
          </div> */}
          <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/book/:id",
          element: <Book />,
        },
        {
          path: "/project/:id",
          element: <Project />,
        },
      ],
    },
    {
      path: "/login", 
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
