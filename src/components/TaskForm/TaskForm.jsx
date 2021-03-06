import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function TaskForm() {
  const initialValues = {
    title: "",
    status: "",
    priority: "",
    description: "",
  };

  const onSubmit = () => {
    alert();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Please enter title")
      .min(6, "The minimun amount of characters is 6."),
    status: Yup.string().required(),
    priority: Yup.string().required(),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <section>
      <h2>Create tasks</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter a title for the task..."
            />
            <div>
              {errors.title && touched.title && <span>{errors.title}</span>}
            </div>
          </div>
          <div>
            <select name="status" onChange={handleChange} onBlur={handleBlur}>
              <option value="">-- Select a state --</option>
              <option value="new">New</option>
              <option value="inProcess">In process</option>
              <option value="finished">Finished</option>
            </select>
            <div>
              {errors.status && touched.status && <span>{errors.status}</span>}
            </div>
          </div>
          <div>
            <select name="priority" onChange={handleChange} onBlur={handleBlur}>
              <option value="">-- Select a priority --</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <div>
              {errors.priority && touched.priority && (
                <span>{errors.priority}</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <textarea
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter description for the task..."
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default TaskForm;
