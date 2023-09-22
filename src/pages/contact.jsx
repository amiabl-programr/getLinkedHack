import { useEffect } from "react";
import Header from "../components/header";
import axios from "axios";

function Contact() {
  useEffect(() => {
    submitForm();
  }, []);

  var data = JSON.stringify({
    email: "sample@eexample.com",
    phone_number: "0903322445533",
    first_name: "Space Explore",
    message: "I need further info",
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

  async function submitForm() {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
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
        <form
          action="
        "
        >
          <div>
            <label>
              <input type="text" placeholder="First Name" />
            </label>
          </div>
          <div>
            <label>
              <input type="email" placeholder="Email" />
            </label>
          </div>
          <div>
            <label>
              <input type="tel" placeholder="Phone number" />
            </label>
          </div>
          <div>
            <label>
              <textarea name="message" placeholder="Message">
                Message
              </textarea>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
