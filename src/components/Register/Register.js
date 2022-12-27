import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {};

  return (
    <div className="sign-up-page-container">
      <div className="container form-page pt-5 pb-5">
        <div className="pt-5 px-4 form-container">
          <div className="text-center">
            <h2>Please Register</h2>
            <p className="text-white-50">Create a new account</p>
          </div>
          <Form
            onSubmit={handleSubmit(handleSignUp)}
            className=" d-flex flex-column  py-3"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Full Name </Form.Label>
              <Form.Control
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Your name"
              />

              {errors.name && (
                <p className="text-danger mb-0">{errors.name?.message}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Email </Form.Label>
              <Form.Control
                {...register('email', { required: 'Email is required' })}
                type="email"
                placeholder="Enter email"
              />

              {errors.email && (
                <p className="text-danger mb-0">{errors.email?.message}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                {...register('password', {
                  required: 'Password is required',
                })}
                type="password"
                placeholder="******"
              />

              {errors.password && (
                <p className="text-danger mb-0">{errors.password?.message}</p>
              )}
            </Form.Group>

            <Button
              className="d-block w-100 fw-semibold btn-register"
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form>

          <p className="text-center">
            <small className="text-white-50">
              Already have an account? &nbsp;
              <Link to="/signin" className="text-white fw-semibold ">
                SignIn
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
