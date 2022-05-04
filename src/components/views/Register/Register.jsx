import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "required";
  }

  if (!values.email) {
    errors.email = "required";
  }

  if (!values.password) {
    errors.password = "required";
  }

  return errors;
};

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      teamID: "",
      role: "",
      continent: "",
      region: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("formik values", values);
    },
  });

  return (
    <section className="min-h-screen flex justify-center items-center sm:bg-gray-50	">
      <form
        className="w-full py-10 px-5 flex flex-col flex-wrap justify-center space-y-2 sm:bg-white sm:border-gray-100 sm:max-w-md sm:rounded sm:shadow"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl font-bold">Registration form</h1>

        <div className="flex flex-wrap flex-col justify-center ">
          <label>Username</label>
          <input
            name="username"
            type="text"
            className="border border-gray-900 p-1"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-700">{formik.errors.username}</div>
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
            <div className="text-red-700">{formik.errors.password}</div>
          ) : null}
        </div>

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
            <div className="text-red-700">{formik.errors.email}</div>
          ) : null}
        </div>

        <input
          type="hidden"
          name="teamID"
          value="5612d2e9-8d53-4d5c-b77b-7050be0c9f71"
        />

        <div className="flex flex-wrap flex-col justify-center ">
          <label htmlFor="role-select">Role</label>
          <select
            name="role"
            id="role-select"
            className="border border-gray-900 p-1"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">-- Please select a role --</option>
            <option value="Team Leader">Team Leader</option>
            <option value="Team Member">Team Member</option>
          </select>
          {formik.touched.role && formik.errors.role ? (
            <div className="text-red-700">{formik.errors.role}</div>
          ) : null}
        </div>

        <div className="flex flex-wrap flex-col justify-center ">
          <label htmlFor="continent-select">Continent</label>
          <select
            name="continent"
            id="continent-select"
            className="border border-gray-900 p-1"
            value={formik.values.continent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">-- Please select a continent --</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.continent && formik.errors.continent ? (
            <div className="text-red-700">{formik.errors.continent}</div>
          ) : null}
        </div>

        <div className="flex flex-wrap flex-col justify-center ">
          <label htmlFor="region-select">Region</label>
          <select
            name="region"
            id="region-select"
            className="border border-gray-900 p-1"
            value={formik.values.region}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">-- Please select a region --</option>
            <option value="North America">North America</option>
            <option value="Latam">Latam</option>
            <option value="Brasil">Brasil</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.region && formik.errors.region ? (
            <div className="text-red-700">{formik.errors.region}</div>
          ) : null}
        </div>

        <div className="flex flex-wrap flex-col justify-center border border-gray-900 p-1">
          <button type="submit">Register</button>
        </div>

        <div className="py-1 w-fit">
          <Link to="/login">Go to login</Link>
        </div>
      </form>
    </section>
  );
};
