import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-center text-4xl font-semibold py-5">Contact</h1>
        <div className="grid grid-cols-1 mt-8 gap-4 sm:grid-cols-2">
          <div>
            <div className="my-5">
              <h4 className="font-bold">🗺 ADDRESS</h4>
              <p className="text-gray-500">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="my-5">
              <h4 className="font-bold">💌 EMAIL</h4>
              <p className="text-gray-500">nc.example@example.com</p>
            </div>
            <div className="my-5">
              <h4 className="font-bold">☎ PHONE</h4>
              <p className="text-gray-500">000-123-456-7890</p>
            </div>
            <div className="my-5">
              <h4 className="font-bold">🌏 SOCIALS</h4>
              <ul className="mt-3">
                <li className="inline-block">
                  <Link to="#">
                    <FaFacebook className="text-2xl mr-4" />
                  </Link>
                </li>
                <li className="inline-block mx-4">
                  <Link to="#">
                    <FaTwitter className="text-2xl" />
                  </Link>
                </li>
                <li className="inline-block mx-4">
                  <Link to="#">
                    <FaYoutube className="text-2xl" />
                  </Link>
                </li>
                <li className="inline-block mx-4">
                  <Link to="#">
                    <FaInstagram className="text-2xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="mb-1 inline-block" htmlFor="full_name">
                Full Name
              </label>
              <br />
              {/* register your input into the hook by invoking the "register" function */}
              <input
                id="full_name"
                placeholder="Example Doe"
                className="primary-input w-full"
                {...register("fullName")}
              />
              <br />
              {/* include validation with required or other standard HTML validation rules */}
              <label className="my-1 inline-block" htmlFor="email">
                Email Address
              </label>
              <br />
              <input
                placeholder="example@example.com"
                className="primary-input w-full"
                id="email"
                {...register("email", { required: true })}
              />
              <br />
              <label className="my-1 inline-block" htmlFor="message">
                Message
              </label>
              <br />
              <textarea
                className="primary-input w-full"
                id="message"
                cols="30"
                rows="10"
                {...register("message", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input className="btn-primary mt-5" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
