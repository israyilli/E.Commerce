import About from "../pages/user/about";
import Contact from "../pages/user/contact";
import Wishlist from "../pages/user/wishlist";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Shop from "../pages/user/shop";
import Basket from "../pages/user/basket";
import Detail from "../pages/user/detail";
import Home from "../pages/user/home";
import UserRoot from "../pages/user/userRoot";
import userNavbar from "../layout/userNavbar";
export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        // path: "home/:id",
        path: "detail",
        element: <Detail />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];
