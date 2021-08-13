import React from "react";

// Formik
import { Formik } from "formik";

// Component
const LinkForm = ({ refreshLinks }) => {
  return (
    <div className="card">
      <div className="card-header">Add Link</div>
      <div className="card-body">
        <Formik
          // Initial Values
          initialValues={{
            name: "",
            url: "",
            description: "",
          }}
          // Validate
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.url) {
              errors.url = "Required";
            }
            if (!values.description) {
              errors.description = "Required";
            }

            // If errors
            return errors;
          }}
          // On Submit
          onSubmit={async (values, { resetForm }) => {
            // logic
            // data
            const body = {
              name: values.name,
              url: values.url,
              description: values.description,
            };

            try {
              await fetch("/.netlify/functions/createLink", {
                method: "POST",
                body: JSON.stringify(body),
              });
            } catch (error) {
              console.log(error);
            }

            resetForm();
            refreshLinks();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group pb-2">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={values.name}
                  onChange={handleChange}
                />
                <span className="text-danger">
                  {errors.name && touched.name && errors.name}
                </span>
              </div>
              <div className="form-group pb-2">
                <label htmlFor="url">URL*</label>
                <input
                  type="text"
                  name="url"
                  className="form-control"
                  value={values.url}
                  onChange={handleChange}
                />
                <span className="text-danger">
                  {errors.url && touched.url && errors.url}
                </span>
              </div>
              <div className="form-group pb-2">
                <label htmlFor="description">Description*</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={values.description}
                  onChange={handleChange}
                />
                <span className="text-danger">
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </span>
              </div>

              {isSubmitting ? (
                <>
                  <button className="btn btn-primary" type="submit" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span className="ml-4"> Saving...</span>
                  </button>
                </>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LinkForm;
