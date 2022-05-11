import React, { useEffect } from "react";
import { Formik } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3002/whoami").then((res) => setUser(res.data));
  }, []);

  return (
    <div className="loginForm">
      <h2>ورود به داشبورد</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "*";
          }
          if (!values.password) {
            errors.password = "*";
          }
          return errors;
        }
      
      }
      onSubmit={(values) => {
        axios.post('http://localhost:3002/auth/login',values).then(res=>{
          console.log(res.status)
          if(res.status===200){
            localStorage.setItem('token',res.data.token)
            navigate("../dashboard");
          }
        })
      }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="Username"
            />
            {errors.username && touched.username && errors.username}

            <input
              type={icon ? "text" : "password"}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
            />

            {errors.password && touched.password && errors.password}

            <div className="iconHolder">
              {icon ? (
                <VisibilityOffIcon
                  className="icons"
                  onClick={() => setIcon(false)}
                />
              ) : (
                <VisibilityIcon
                  className="icons"
                  onClick={() => setIcon(true)}
                />
              )}
            </div>
            <button type="submit" disabled={isSubmitting}>
              ورود
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
