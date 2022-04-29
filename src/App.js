import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

import { Login } from "./components/views/Login/Login";
import { Register } from "./components/views/Register/Register";
import { Tasks } from "./components/views/Tasks/Tasks";

const Error404 = lazy(() => import("./components/views/Error404/Error404"));

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("logged")) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const App = () => {
  const location = useLocation();

  return (
    <div className="font-Nunito">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageTransition}
                >
                  <Tasks />
                </motion.div>
              </RequireAuth>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Register />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Login />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Suspense fallback={<>...</>}>
                  <Error404 />
                </Suspense>
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
