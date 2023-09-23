import axios from "axios";
import { useState } from "react";
import register_img from "../assets/register-img.png";
import Header from "../components/header";

const initialValues = {
  email: "",
  phone_number: "",
  team_name: "",
  category: "",
  project_topic: "",
  group_size: "",
  privacy_poclicy_accepted: true,
};

function Register() {
  const [input, setInput] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  // Function to toggle the checkbox state
  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setInput({ ...input, [name]: checked });
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
    const {
      email,
      phone_number,
      team_name,
      privacy_poclicy_accepted,
      project_topic,

      category,
    } = input;
    console.log(category);
    console.log(privacy_poclicy_accepted);
    const validationErrors = {};

    if (!team_name) {
      validationErrors.team_name = "Please enter your team name.";
    }
    if (!project_topic) {
      validationErrors.project_topic = "Please enter your project topic.";
    }

    if (!email) {
      validationErrors.email = "Please enter your email address.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!phone_number) {
      validationErrors.phone_number = "Please enter your phone number.";
    } else if (!validatePhone(phone_number)) {
      validationErrors.phone = "Please enter a valid phone number.";
    }

    if (!privacy_poclicy_accepted) {
      validationErrors.privacy_poclicy_accepted = "Please check the box.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (privacy_poclicy_accepted) {
      // Only submit the form if the checkbox is checked
      var data = JSON.stringify({
        email: input.email,
        phone_number: input.phone_number,
        team_name: input.team_name,
        group_size: input.group_size,
        project_topic: input.project_topic,
        category: input.category,
        privacy_poclicy_accepted: input.privacy_poclicy_accepted,
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://backend.getlinked.ai/hackathon/registration",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log("sent");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Header />
      <div
        className=" bg-background-col text-white flex flex-col lg:flex-row
       items-center justify-center  px-4 lg:px-0 lg:pt-[68px] lg:pb-[57px]
       py-6 lg:py-0 "
      >
        <img
          src={register_img}
          className=" w-52 lg:w-[400px] xl:w-[550px] 2xl:w-[600px]"
          alt=""
        />

        <div className=" bg-transparent lg:bg-glass lg:pt-[75px] lg:px-7 xl:px-[92px] lg:pb-[67px]">
          <p
            className="text-tet-col font-semibold font-clashDisplay 
          text-[15px] lg:text-[32px]"
          >
            Register
          </p>
          <div>
            <p className="font-normal text-sm">Be part of this movement!</p>
          </div>
          <p className=" font-normal text-xl lg:text-2xl mt-[7px] mb-[23px] lg:mt-[19px] lg:mb-[33px]">
            CREATE YOUR ACCOUNT
          </p>

          <form className="" onSubmit={handleSubmit}>
            {/* first row on desktop */}
            <div
              className="flex flex-col lg:flex-row justify-between
            gap-[18px]"
            >
              <div className="flex flex-col">
                <label htmlFor="team-name">Team&apos;s Name</label>
                <input
                  type="text"
                  name="team_name"
                  placeholder="Enter the name of your group"
                  onChange={handleChange}
                  value={input.team_name}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  value={input.phone_number}
                />
              </div>
            </div>

            {/* second row on desktop */}
            <div
              className="flex flex-col lg:flex-row justify-between
            gap-[18px] lg:my-[29px]"
            >
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  value={input.email}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="project-topic">Project Topic</label>
                <input
                  type="text"
                  name="project_topic"
                  placeholder="What is your group project topic"
                  onChange={handleChange}
                  value={input.project_topic}
                />
              </div>
            </div>

            {/* third row */}
            <div className="flex flex-row ">
              <div className="flex flex-col w-40 flex-1 mr-[19px]">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  placeholder="Select your Category"
                  onChange={handleChange}
                  value={input.category}
                >
                  <option value="">Select your category</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="flex flex-col ml-auto lg:flex-1  ">
                <label htmlFor="group">Group Size</label>
                <select
                  name="group_size"
                  id="group-size"
                  placeholder="Select"
                  onChange={handleChange}
                  value={input.group_size}
                >
                  <option value="" defaultValue>
                    Select
                  </option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>

              <div></div>
            </div>

            <p className="italic text-tet-col font-normal mt-6 mb-4">
              Please review your registration details before submitting
            </p>
            <div>
              <input
                type="checkbox"
                name="privacy_poclicy_accepted"
                id="privacy_poclicy_accepted"
                checked={input.privacy_poclicy_accepted}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="tos">
                I agreed with the event terms and conditions and privacy policy
              </label>
              <div className=" text-red-600">
                {errors && errors.privacy_poclicy_accepted}
              </div>
            </div>

            <div className="grid place-items-center lg:place-items-stretch mt-5">
              <button className="gradient text-white py-[17px] px-[57px]">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
