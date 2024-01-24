import Login from "views/Login";

var authRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bank",
    component: <Login />,
    layout: "/auth",
  },
];
export default authRoutes;
