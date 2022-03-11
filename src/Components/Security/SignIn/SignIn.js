import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const SignIn = () => {
  const { signInUserWithEmail } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => signInUserWithEmail(data);
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-md mx-auto space-y-6 ">
          <h1 className="py-10 text-center text-4xl font-bold">Login</h1>
          <div>
            <button className="btn-light w-full">
              <FaFacebookSquare className="inline-block mr-1 text-xl" />{" "}
              Continue with Facebook
            </button>
            <button className="btn-light w-full">
              <FaGoogle className="inline-block mr-1 text-xl" /> Continue with
              Google
            </button>
          </div>
          <p className="text-center">---------------- OR ----------------</p>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                id="email"
                type="email"
                placeholder="Example@example.com"
                className="primary-input my-1 w-full"
                {...register("email")}
              />
              <br />
              {/* include validation with required or other standard HTML validation rules */}
              <label className="mt-5 inline-block" htmlFor="password">
                Password
              </label>
              <br />
              <input
                id="password"
                type="password"
                className="primary-input my-1 w-full"
                {...register("password", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input
                className="btn-primary w-full"
                type="submit"
                value="Continue"
              />
            </form>
            <p className="mt-5 text-center text-lg text-gray-600">
              New user? <Link to="/sign-up">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
