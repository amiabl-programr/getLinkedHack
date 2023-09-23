import { useState } from "react";
import Header from "../components/header";
import axios from "axios";
import Twitter from "../assets/twitter.png";
import Fb from "../assets/fb.png";
import Insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [input, setInput] = useState(initialValues);
  const [errors, setErrors] = useState({});

  var data = JSON.stringify({
    email: input.email,
    phone_number: input.phone,
    first_name: input.name,
    message: input.message,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://backend.getlinked.ai/hackathon/contact-form",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleSubmit(e) {
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

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Header />
      <section
        className="flex justify-center items-center lg:gap-20 xl:gap-56
       bg-background-col text-white pt-16 pb-14 lg:pt-36 lg:pb-[115px]"
      >
        <div className="hidden lg:block w-[272px]">
          <h3 className="text-[32px] text-tet-col">Get in touch</h3>
          <ul className=" mt-4 flex flex-col gap-4">
            <li>Contact Information</li>
            <li>27,Alara Street Yaba 100012 Lagos State</li>
            <li>Call Us : 07067981819</li>
            <li>We are open from Monday-Friday 08:00am - 05:00pm</li>
          </ul>

          <div className=" mt-8 ">
            <p className=" text-tet-col ">Share on</p>
            <div className="flex items-center gap-5 pt-[14px]">
              <img src={Insta} alt="" />
              <img src={Twitter} alt="" />
              <img src={Fb} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        {/* form */}
        <div className="bg-glass lg:pt-[75px] lg:px-[92px] lg:pb-[67px]">
          <h3 className=" text-tet-col w-[195px] lg:w-[301px]">
            Questions or need assistance? Let us know about it
          </h3>
          <p className=" mt-6 mb-[30px]">
            Email us below to any question related to our event
          </p>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
              <div>
                <label>
                  <input
                    name="name"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={input.name}
                    className=" w-full"
                  />
                </label>
                <div className=" text-red-500">{errors && errors.name}</div>
              </div>

              <div>
                <label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    className=" w-full"
                    placeholder="Email"
                  />
                  <div className=" text-red-500">{errors && errors.email}</div>
                </label>
              </div>

              <div>
                <label>
                  <input
                    name="phone"
                    type="tel"
                    value={input.phone}
                    onChange={handleChange}
                    className=" w-full"
                    placeholder="Phone number"
                  />
                  <div className=" text-red-500">{errors && errors.phone}</div>
                </label>
              </div>

              <div>
                <label>
                  <textarea
                    value={input.message}
                    onChange={handleChange}
                    className=" w-full "
                    name="message"
                    placeholder="Message"
                  >
                    Message
                  </textarea>
                  <div className=" text-red-500">
                    {errors && errors.message}
                  </div>
                </label>
              </div>
              <div className="text-center">
                <button className="gradient py-[17px] px-[57px] rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
