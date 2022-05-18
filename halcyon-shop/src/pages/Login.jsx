import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useFormik } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [icon, setIcon] = useState(false);
  
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(setUser(values));
      axios.get("http://localhost:3002/whoami").then((res) => setUser(res.data));
      axios.post("http://localhost:3002/auth/login", formik.values).then((res) => {
            console.log(res.status);
            if (res.status === 200) {
              localStorage.setItem("token", res.data.token);
              navigate("../dashboard/manage-page");
            }
          });
    },
  });
 
  return (
    <div className="loginForm">
      <form onSubmit={formik.handleSubmit}>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <input
          id="password"
          name="password"
          type={icon ? "text" : "password"}
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="iconHolder">
          {icon ? (
            <VisibilityOffIcon
              className="icons"
              onClick={() => setIcon(false)}
            />
          ) : (
            <VisibilityIcon className="icons" onClick={() => setIcon(true)} />
          )}
        </div>

        <button type="submit">
          ورود
        </button>
      </form>
    </div>
  );
};

export default Login;
