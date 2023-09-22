// import axios from "axios";
import { useState } from "react";
import register_img from "../assets/register-img.png";
import Header from "../components/header";

function Register() {
  const [input, setInput] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const initialValues = {
    email: "sample@eexample.com",
    phone_number: "0903322445533",
    team_name: "Space Explore",
    group_size: 10,
    project_topic: "Web server propagation",
    category: 1,
    privacy_poclicy_accepted: true,
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    const validatePhone = (phone) => {
      const regex = /^\d{11}$/; // Assumes a 10-digit phone number
      return regex.test(phone);
    };

    // Validate form fields
    const { name, email, phone, message } = input;
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Please enter your name.";
    }

    if (!email) {
      validationErrors.email = "Please enter your email address.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!phone) {
      validationErrors.phone = "Please enter your phone number.";
    } else if (!validatePhone(phone)) {
      validationErrors.phone = "Please enter a valid phone number.";
    }

    if (!message) {
      validationErrors.message = "Please enter a message.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    
  };
  return (
    <>
      <Header />
      <div
        className=" bg-background-col text-white flex flex-col lg:flex-row
       items-center justify-center  px-4 lg:px-0"
      >
        <img src={register_img} width={500} alt="" />

        <div>
          <p
            className="text-tet-col font-bold font-clashDisplay 
          text-[15px] lg:text-[32px]"
          >
            Register
          </p>
          <div>
            <p className="font-normal text-sm">Be part of this movement!</p>
          </div>
          <p>CREATE YOUR ACCOUNT</p>

          <form className="">
            {/* first row on desktop */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col">
                <label htmlFor="team-name">Team&apos;s Name</label>
                <input
                  type="text"
                  name="team-name"
                  placeholder="Enter the name of your group"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Team&apos;s Name</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* second row on desktop */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="project-topic">Project Topic</label>
                <input
                  type="name"
                  name="project-topic"
                  placeholder="What is your group project topic"
                />
              </div>
            </div>

            {/* third row */}
            <div className="flex flex-row">
              <div className="flex flex-col w-40">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id=""
                  placeholder="Select your Category"
                >
                  <option value="" disabled selected hidden>
                    Select your category
                  </option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>
              </div>

              <div className="flex flex-col ml-auto ">
                <label htmlFor="group-size">Group Size</label>
                <select
                  name="group-size"
                  id=""
                  placeholder="Select your Category"
                >
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>
              </div>

              <div></div>
            </div>

            <p className="italic text-tet-col font-normal">
              Please review your registration details before submitting
            </p>
            <div>
              <input type="checkbox" name="tos" id="tos" />
              <label htmlFor="tos">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>

            <div className="grid place-items-center">
              <button className="gradient text-white">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
