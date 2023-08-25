import React from "react";
import { NavLink } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';


export const userSchema = yup.object({
  email : yup.string().email().required("THIS FIELD CAN'T BE EMPTY"),
  password : yup.string().min(4).max(20 , "PASSWORD MUST BE 20 CHARACTERS OR LESS").required("THIS FIELD CAN'T BE EMPTY"),
  confirmPassword : yup.string().oneOf([yup.ref("password",), null , ]).required("THIS FIELD CAN'T BE EMPTY"),
  username : yup.string().required("this field can't be empty"),
});

export default function Register() {

  const {register, handleSubmit, formState : {errors}} = useForm({resolver : yupResolver(userSchema)});
  const onSubmit = (data) => console.log(data);


  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center py-4 my-4">
        <div className="row" style={{ width: "50%" }}>
          <div className="col-md-12">
            <form
              className="form d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1>Register Form</h1>
              <label htmlFor="username" className="form-label">
                <span>Username : </span>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Username..."
                  {...register("username")}
                />
                <p className="text-danger m-0 text-uppercase">
                  {errors.username?.message}
                </p>
              </label>
              <label htmlFor="username" className="form-label">
                <span>Email : </span>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Email..."
                  {...register("email")}
                />
                <p className="text-danger m-0 text-uppercase">
                  {errors.email?.message}
                </p>
              </label>
              <label htmlFor="password" className="form-label">
                <span>Password : </span>
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password..."
                  {...register("password")}
                />
                <p className="text-danger m-0 text-uppercase">
                  {errors.password?.message}
                </p>
              </label>
              <label htmlFor="password" className="form-label">
                <span>Confirm Password : </span>
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Confirm Password..."
                  {...register("confirmPassword")}
                />
                <p className="text-danger m-0 text-uppercase">
                  {errors.confirmPassword?.message}
                </p>
              </label>
              <button
                type="submit"
                className="btn btn-outline-dark btn-lg my-2"
              >
                Register
              </button>
              <NavLink
              to='/login'
                className="fs-6"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Already Have An Account? Login
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
