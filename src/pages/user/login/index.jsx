import { Container } from "react-bootstrap";
import "../../../assets/style/Login.scss";
// import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Please enter a username"),
  password: Yup.string()
    .required("Please enter the correct password!")
    .matches(
      /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/,
      "Please enter the correct password!"
    ),
});

function Index() {
  // const navigate = useNavigate();
  const [error, setError] = useState(null);

  const submitHandler = async (values) => {
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        username: values.username,
        password: values.password,
      });

      console.log("Login successful", response.data);
      history.push("/home");
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid username or password");
    }
  };

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
                validationSchema={LoginSchema}
                onSubmit={submitHandler}
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
                    {error && (
                      <div style={{ color: "red", marginTop: "-20px" }}>
                        {error}
                      </div>
                    )}
                    <button type="submit">Sign In</button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="switch-login">
              {/* <p
                onClick={() => {
                  navigate("/register");
                }}
              >
                Or Create An Account
              </p> */}
              <Link to="/register">register</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Index;
