import Layout from "./Layout/Layout";
// import HomePage from "pages/HomePage/HomePage";
// import ContactsPage from "pages/ContactsPage/ContactsPage";
// import RegisterPage  from "pages/RegisterPage/RegisterPage";
// import LoginPage from "pages/LoginPage/LoginPage";
// import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

import { lazy, Suspense } from "react";// lazy,
import { Routes, Route } from "react-router-dom";
import { infoStyle } from "services/userInformator";
import { Loader } from "components/Loader/Loader";
import { refs } from "../services/refs";
console.log(refs);
infoStyle();



// const Layout = lazy(() => import("../components/Layout/Layout" /* webpackChunkName: "layout" */));
const HomePage = lazy(() => import("pages/HomePage/HomePage" /* webpackChunkName: "home-page" */));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage" /* webpackChunkName: "movie-page" */));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage" /* webpackChunkName: "details-page" */));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage" /* webpackChunkName: "cast" */));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "not-found" */));

export function App() {
  return (
  <>
      <Suspense fallback={<>{<Loader/>}</>}>
        <Routes>
            <Route path={refs.layout} element={<Layout />}>
              <Route index element={<HomePage />}/>
              <Route path={refs.contactsPage} element={<ContactsPage/>}/>
              <Route path={refs.registerPage} element={<RegisterPage />}/>
              <Route path={refs.loginPage} element={<LoginPage/>}/>
              <Route path={refs.notFoundPage} element={<NotFoundPage/>}/>
            </Route >
          </Routes>
        </Suspense>
    </>
    );
}
