import React from "react";

export function Input({ label, name, type, onChange, lenght, className }) {
  return (
    <div className="md-form ">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        id={name}
        className={className}
        onChange={onChange}
        minLength={lenght}
        required
      />
    </div>
  );
}

export default function LayOut({ onFormSubmit, onChange }) {
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        {/* section post */}
        <section className="mt-4">
          <div className="row">
            {/* grid column */}
            <div className="col-md-6 mb-3 offset-md-3">
              <div className="text-center mb-4 wow fadeIn">
                {/* material login form */}
                <div className="card">
                  <h5 className="card-header unique-color-dark  white-text text-center mt-0 py-4">
                    <strong>Create Account</strong>
                  </h5>
                  <div className="card-body px-lg-5 pt-5">
                    <form
                      id="signupform"
                      className="text-center"
                      onSubmit={onFormSubmit}
                    >
                      <Input
                        label="Username"
                        name="username"
                        onChange={onChange}
                        className="form-control"
                        type="text"
                        lenght="4"
                      />

                      <Input
                        label="Email"
                        name="email"
                        onChange={onChange}
                        className="form-control"
                        type="email"
                        lenght="4"
                      />

                      <Input
                        label="Password"
                        name="password"
                        onChange={onChange}
                        className="form-control"
                        type="password"
                        lenght="8"
                      />

                      <Input
                        label="Confirm password"
                        name="confirmPassword"
                        onChange={onChange}
                        className="form-control"
                        type="password"
                        lenght="8"
                      />
                      <button
                        type="submit"
                        className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
