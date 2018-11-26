import React from "react";

export const Form = props => {
  const { handleSubmit, handleChange, type, id, placeholder, name, innerHTML } = props;
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="md-form">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="form-control"
          name={name}
          onChange={handleChange}
          required />
      </div>
      <button
        className="btn btn-outline-info btn-rounded my-2 waves-effect z-depth-0 blog-pagination"
        type="submit">
        {innerHTML}
      </button>
    </form>
  );
};
const FormLayout = props => {
  const { title, handleSubmit, handleChange, type, id, placeholder, name, innerHTML } = props;
  return <React.Fragment>
    <main className="mt-5 pt-5 container">
      <section className="mt-4">
        <div className="row">
          <div className="col-md-6 mb-3 offset-md-3">
            <div className="text-center mb-4 wow fadeIn card">
              <h5 className="card-header unique-color-dark  white-text text-center mt-0 py-4">
                <strong>{title}</strong>
              </h5>
              <div className="card-body px-lg-5 pt-5">
                <Form handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  type={type} id={id}
                  placeholder={placeholder}
                  name={name}
                  innerHTML={innerHTML} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </React.Fragment>;
};

export default FormLayout;
