import { Container } from "react-bootstrap";
import "../../../assets/style/Login.scss";

import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Login = Yup.object().shape({
  username: Yup.string().required("Please entered username"),
  password: Yup.string()
    .required("Please entered the Correct password!")
    .matches(
      /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/,
      "Please entered the Correct password!"
    ),
});

function index() {
  return (
    <div className="login">
      <title>Login Page</title>

      <div className="login-section">
        <Container>
          <div className="login-form">
            <h2>Login</h2>

            <div>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validateOnBlur={false}
                validateOnChange={false}
                validationSchema={Login}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="input">
                      <label>Username *</label>
                      <div className="input-username">
                        <Field
                          className="username"
                          name="username"
                          style={
                            errors.username &&
                            touched.username && { borderColor: "red" }
                          }
                        />
                      </div>
                    </div>
                    {errors.username && touched.username && (
                      <div
                        style={
                          errors.username &&
                          touched.username && {
                            fontSize: "17px",
                            color: "red",
                            marginTop: "-20px",
                          }
                        }
                      >
                        {errors.username}
                      </div>
                    )}

                    <div className="input">
                      <label>Password *</label>
                      <div
                        className="inputpassword"
                        style={
                          errors.password &&
                          touched.password && { borderColor: "red" }
                        }
                      >
                        <Field className="password" name="password" />
                      </div>
                    </div>
                    {errors.password && touched.password && (
                      <div
                        style={
                          errors.password &&
                          touched.password && {
                            fontSize: "17px",
                            color: "red",
                            marginTop: "-20px",
                          }
                        }
                      >
                        {errors.password}
                      </div>
                    )}
                    <button type="submit">Sign In</button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="switch-login">
              <Link to={"/register"}> Or Create An Account</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default index;