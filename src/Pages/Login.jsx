import React from 'react'
import { NavLink } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { userSchema } from './Register';



export default function Login() {

    const {register, handleSubmit, formState : {errors}} = useForm({resolver : yupResolver(userSchema)});

    const onSubmit = (data) => console.log(data);


  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center py-4 my-4'>
        <div className="row" style={{width : "50%"}}>
            <div className="col-md-12" >
                <form className='form d-flex flex-column' onSubmit={handleSubmit(onSubmit)} >
                    <h1>Login Form</h1>
                    <label htmlFor="username" className='form-label'>
                        <span>Username : </span>
                        <input type="text" className='form-control mb-2' placeholder='Username...' {...register("username")}  />
                        <p className='text-danger m-0 text-uppercase'>{errors.username?.message}</p>
                    </label>
                    <label htmlFor="password" className='form-label'>
                        <span>Password : </span>
                        <input type="password" className='form-control mb-2' placeholder='Password...' {...register("password")} />
                        <p className='text-danger m-0 text-uppercase'>{errors.password?.message}</p>
                    </label>
                    <button type='submit' className='btn btn-outline-dark btn-lg my-2'>Log In</button>
                    <NavLink to='/register' className='fs-6' style={{color : "gray", textDecoration : "none"}}>
                        Don't Have An Account? create account
                    </NavLink>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
