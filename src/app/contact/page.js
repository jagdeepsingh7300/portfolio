"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import contactStyles from "../styles/Contact.module.css";
const contact = () => {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({
    fName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({
    fname: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }
  const handleSubmit = async (formData) => {
    const fullName = formData.get("fName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    //validations
    const newErrors = {};
    if (fullName == "") {
      newErrors.fname = "Please fill your full name";
    }
    if (email == "") {
      newErrors.email = "Please fill your email address";
    }
    if (phone == "") {
      newErrors.phone = "Please fill your phone number";
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    }
    //ends

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        header: { "Content_Type ": "application/json" },
        body: JSON.stringify({
          username: fullName,
          email: email,
          phone: phone,
          message: message,
        }),
      });
      //for thankyou message and error message
      if (response.status === 200) {
        setUser({ fName: "", email: "", phone: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <form action={handleSubmit} className="my-4 text-center">
        <h1>Send me a message!</h1>
        <h3 className="text-primary">
          Got a question or proposal, or just want to say hello? Go ahead.
        </h3>
        <div className="d-flex flex-column px-5" style={{ gap: 10 }}>
          <TextField
            label="Full Name"
            name="fName"
            value={user.fName}
            className={contactStyles.textField}
            onChange={handleChange}
            variant="outlined"
          />
          {error.fname && (
            <p className={`text-danger ${contactStyles.error}`}>
              {error.fname}
            </p>
          )}
          <TextField
            label="Email"
            name="email"
            type="email"
            className={contactStyles.textField}
            value={user.email}
            onChange={handleChange}
            variant="outlined"
          />
          {error.email ? (
            <p className={`text-danger ${contactStyles.error}`}>
              {error.email}
            </p>
          ) : (
            <p className="d-none"></p>
          )}
          <TextField
            label="Phone"
            type="number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            variant="outlined"
          />
          {error.phone ? (
            <p className={`text-danger ${contactStyles.error}`}>
              {error.phone}
            </p>
          ) : (
            ""
          )}
          <TextField
            label="Message"
            name="message"
            value={user.message}
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            multiline
            rows={4}
            onChange={handleChange}
            variant="outlined"
          />
          {status === "success" && (
            <p className={contactStyles.success}>Thank you for your message</p>
          )}
          {status === "error" && (
            <p className={contactStyles.error_msg}>
              There was a error while submitting, please try again
            </p>
          )}
        </div>
        <Button
          variant="contained"
          type="submit"
          name="message"
          value="SEND MESSAGE"
          size="medium"
          sx={{ width: 200, padding: 1, margin: 2 }}
          endIcon={<SendIcon />}
        >
          SEND MESSAGE
        </Button>
      </form>
    </div>
  );
};

export default contact;
