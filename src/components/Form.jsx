"use client";

import { Fade } from "react-awesome-reveal";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import React, { useState } from "react";

import {
  UserCheck,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Building,
} from "lucide-react";

const Form = () => {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();

  function log() {
    var data = JSON.stringify({
      name: name,
      email: email,
      description: desc,
      phone_number: phone,
    });
    fetch("http://127.0.0.1:5000/withoutOption", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
      });
  }
  return (
    <form className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-6">
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <div className="relative flex items-center">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
            placeholder="اسم"
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
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
            placeholder="شماره تلفن"
            id="phone number"
            className="border border-gray-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <UserCheck className="absolute left-3 text-gray-500" size={20} />
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            placeholder="ایمیل"
            className="border border-gray-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Building className="absolute left-3 text-gray-500" size={20} />
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
          />{" "}
          <Textarea
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="توضحات"
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
          <ArrowRightIcon size={20} /> فرستادن پیام
        </Button>
      </Fade>
    </form>
  );
};

export default Form;
