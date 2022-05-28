import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  operations  from '../redux/auth/authOperations';
import { lazy, Suspense } from "react";// lazy,
import { Routes, Route } from "react-router-dom";
import { infoStyle } from "services/userInformator";
import { Loader } from "components/Loader/Loader";
import { refs } from "../services/refs";
import Layout from "./Layout/Layout";
import PrivateRoute from'pages/PrivateRoute/PrivateRoute';
import PublicRoute from'pages/PublicRoute/PublicRoute';
infoStyle();


const HomePage = lazy(() => import("pages/HomePage/HomePage" /* webpackChunkName: "home-page" */));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage" /* webpackChunkName: "contacts-page" */));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage" /* webpackChunkName: "register-page" */));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage" /* webpackChunkName: "login-page" */));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "not-found" */));


export function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
  <>
      <Suspense fallback={<>{<Loader/>}</>}>
        <Routes>
            <Route path={refs.layout} element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path={refs.registerPage}
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path={refs.loginPage}
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path={refs.contactsPage}
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              {/* <Route path={refs.contactsPage} element={<ContactsPage/>}/> */}
              {/* <Route path={refs.registerPage} element={<RegisterPage />}/> */}
              {/* <Route path={refs.loginPage} element={<LoginPage/>}/> */}
              <Route path={refs.notFoundPage} element={<NotFoundPage/>}/>
            </Route >
          </Routes>
        </Suspense>
    </>
    );
}
