"use client";

import { Fade } from "react-awesome-reveal";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import React, { useState } from "react";
import {
  UserCheck,
  ArrowRightIcon,
  MessageSquare,
  Building,
  PhoneCall,
  AtSign,
} from "lucide-react";

const Form = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const log = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate input fields
    if (!name || !email || !desc || !phone) {
      setErrorMessage("لطفا تمام فیلدها را پر کنید."); // "Please fill in all fields."
      return;
    }

    // Simple email format validation (you can improve this)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("ایمیل نامعتبر است."); // "Invalid email."
      return;
    }

    // Simple phone number validation (modify as per your requirement)
    const phonePattern = /^[0-9]{10,}$/; // Example: expects 10 or more digits
    if (!phonePattern.test(phone)) {
      setErrorMessage("شماره تلفن نامعتبر است."); // "Invalid phone number."
      return;
    }

    const data = JSON.stringify({
      name: name,
      email: email,
      description: desc,
      phone_number: phone,
    });

    try {
      const response = await fetch("http://194.5.188.17/user/withoutOption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // Clear form and show success message
        setSuccessMessage("پیام شما با موفقیت ارسال شد!"); // "Your message has been sent successfully!"
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
        setErrorMessage(""); // Clear any previous error message
      } else {
        setErrorMessage("خطا در ارسال پیام. لطفا دوباره امتحان کنید."); // "Error sending message. Please try again."
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("خطا در ارسال پیام. لطفا دوباره امتحان کنید."); // "Error sending message. Please try again."
    }
  };

  return (
    <form className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-6">
      {successMessage && (
        <div className="text-green-600 mb-4">{successMessage}</div>
      )}
      {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
            placeholder="نام و  نام خانوادگی"
            className="border border-gray-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <UserCheck className="absolute left-3 text-gray-500" size={20} />
        </div>
      </Fade>

      <Fade
        direction="up"
        delay={600}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
            placeholder="شماره همراه"
            id="phone number"
            className="border border-gray-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <PhoneCall className="absolute left-3 text-gray-500" size={20} />
        </div>
      </Fade>

      <Fade
        direction="up"
        delay={800}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            placeholder="پست الکترونیکی"
            className="border border-gray-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <AtSign className="absolute left-3 text-gray-500" size={20} />
        </div>
      </Fade>

      <Fade
        direction="up"
        delay={1000}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <MessageSquare
            className="absolute top-3 left-3 text-gray-500"
            size={20}
          />
          <Textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="توضیحات"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </Fade>

      <Fade
        direction="up"
        delay={1200}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <Button
          onClick={log}
          className="flex items-center gap-x-1 bg-blue-500 text-white px-4 py-2 rounded-md transition hover:bg-blue-600 focus:outline-none"
        >
          <ArrowRightIcon size={20} /> ارسال
        </Button>
      </Fade>
    </form>
  );
};

export default Form;
