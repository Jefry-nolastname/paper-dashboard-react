import authRoutes from "authRoutes";
import { Route, Routes } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/css/util.css" />
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <link rel="icon" type="image/png" href="/images/icons/favicon.ico" />
      <link
        rel="stylesheet"
        type="text/css"
        href="/vendor/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/vendor/animate/animate.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/vendor/css-hamburgers/hamburgers.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/vendor/animsition/css/animsition.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/vendor/select2/select2.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/vendor/daterangepicker/daterangepicker.css"
      />

      <Routes>
        {authRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} element={prop.component} key={key} exact />
          );
        })}
      </Routes>
      <script src="/vendor/jquery/jquery-3.2.1.min.js"></script>
      <script src="/vendor/animsition/js/animsition.min.js"></script>
      <script src="/vendor/bootstrap/js/popper.js"></script>
      <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="/vendor/select2/select2.min.js"></script>
      <script src="/vendor/daterangepicker/moment.min.js"></script>
      <script src="/vendor/daterangepicker/daterangepicker.js"></script>
      <script src="/vendor/countdowntime/countdowntime.js"></script>
      <script src="/js/main.js"></script>
    </>
  );
}

export default AuthLayout;
