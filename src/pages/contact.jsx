import { useState } from "react";
import Header from "../components/header";
import axios from "axios";

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
      {/* form */}
      <div className="bg-background-col text-white">
        <p>Questions or need assistance? Let us know about it</p>
        <p>Email us below to any question related to our event</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                name="name"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                value={input.name}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                name="phone"
                type="tel"
                value={input.phone}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </label>
          </div>
          <div>
            <label>
              <textarea
                value={input.message}
                onChange={handleChange}
                name="message"
                placeholder="Message"
              >
                Message
              </textarea>
            </label>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
