import Home from "./pages/home";
import HomeLayout from "./pages/HomeLayout";
import Contact from "./pages/contact";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/blog";
import Categories from "./pages/blog/categories";
import Post from "./pages/blog/post";
import Blog404 from "./pages/Blog404";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";

const routes = [
  {
    path: "/",
    name:"home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        name:"index",
        element: <Home />,
      },
      {
        name:"contact",
        path: "contact",
        element: <Contact />,
      },
      {
        name:"blog",
        path: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            name:"index",
            index: true,
            element: <Blog />,
          },
          {
            name:"categories",
            path: "categories",
            element: <Categories />,
          },
          {
            name:"post",
            path: "post/:id/url",
            element: <Post />,
          },
          {
            name:"notFound",
            path: "*",
            element: <Blog404 />,
          },
        ],
      },
      {
        name:"profile",
        path: "profile",
        element: <Profile />,
        auth: true,
      },
    ],
  },

  {
    name:"auth",
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        name:"login",
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    name:"notFound",
    path: "*",
    element: <Blog404 />,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });


export default authMap(routes);
