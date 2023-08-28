import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

const loginSchema = yup.object({
  email: yup.string().email("Email Should be Valid").required("Email Address is Required"),
  password: yup.string().required("password is Required"),
});
const Login = () => {
  const dispatch =useDispatch();
const navigate =useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async(values) => {
     const action = await dispatch(loginUser(values));
     
    if (!action.error) {

      navigate('/');
    }

    },
  });
  return (
    <>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <CustomInput type="email" name="email" onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} value={formik.values.email} placeholder='Email' />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput type="password" name='password' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} placeholder='Password' />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <div className="d-flex mt-3 justify-content-center align-items-center gap-15">
                    <button className="button border-0" type='submit'>Login</button>
                    <Link to="/signup" className='button signup'>SingUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login