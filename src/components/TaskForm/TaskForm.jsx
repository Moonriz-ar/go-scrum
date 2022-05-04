import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function TaskForm() {
  const initialValues = {
    title: "",
    status: "",
    prority: "",
    description: "",
  };

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, onSubmit });
  const { handleSubmit, handleChange } = formik;

  return (
    <section>
      <h2>Create tasks</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name="title"
              onChange={handleChange}
              placeholder="Enter a title for the task..."
            />
          </div>
          <div>
            <select name="status" onChange={handleChange}>
              <option value="">-- Select a state --</option>
              <option value="new">New</option>
              <option value="inProcess">In process</option>
              <option value="finished">Finished</option>
            </select>
          </div>
          <div>
            <select name="priority" onChange={handleChange}>
              <option value="">-- Select a priority --</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Enter description for the task..."
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default TaskForm;
