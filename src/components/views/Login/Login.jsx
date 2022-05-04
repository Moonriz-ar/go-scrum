import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "required";
  }

  if (!values.password) {
    errors.password = "required";
  }

  return errors;
};

export const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("formik email", values.email);
      console.log("formik password", values.password);
      localStorage.setItem("logged", "yes");
      navigate("/", { replace: true });
    },
  });

  return (
    <section className="min-h-screen flex justify-center items-center sm:bg-gray-50	">
      <form
        className="w-full py-10 px-5 flex flex-col flex-wrap justify-center space-y-5 sm:bg-white sm:border-gray-100 sm:max-w-md sm:rounded sm:shadow"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl font-bold">Login</h1>

        <div className="flex flex-col space-y-2">
          <div className="flex flex-wrap flex-col justify-center ">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="border border-gray-900 p-1"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-wrap flex-col justify-center ">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="border border-gray-900 p-1"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex flex-wrap flex-col justify-center border border-gray-900 p-1">
            <button type="submit">Login</button>
          </div>
        </div>

        <div className="py-1 w-fit">
          <Link to="/register">Go to register</Link>
        </div>
      </form>
    </section>
  );
};
