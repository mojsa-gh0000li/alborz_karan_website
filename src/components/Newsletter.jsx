"use client";

import { Fade } from "react-awesome-reveal";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CalendardayIcon, HandRausedIcon } from "@heroicons/react/24/outline";
const Newsletter = () => {
  return (
    <section>
      <div className="relative bg-teriary overflow-hidden py-16 sm:py-24 lg:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-m-2xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <Fade
                direction="left"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h2 className="text-3xl font-bold tracking-tight section-title sm:text-4xl">
                  hello ;iuf;fycxld
                </h2>
              </Fade>

              <Fade
                direction="left"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <p className="mt-4 text-lg leading-8 subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente atque minus totam amet facere iusto doloribus porro
                  distinctio quidem quisquam tempora odit ratione numquam,
                  asperiores veniam, perferendis nam modi rerum!
                </p>
              </Fade>

              <Fade
                direction="up"
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <div className="mt-6 flex max-w-md gap-x-4 ">
                  {/* <lable className="sr-only "></lable> */}
                  <Input id="email" name="email" type="email" required />
                  <link href="/contact">
                    <Button>ok</Button>
                  </link>
                </div>
              </Fade>

              <dl className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <Fade
                  direction="right"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <div className="flex flex-col items-start">
                    <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                      <CalendardayIcon className="h-6 w-6 text-white" />
                    </div>
                    <dt className="mt-4 fontsemibold text-muted-foregroun">
                      weekly
                    </dt>
                    <dd className="mt-2 leading-7">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Animi, maiores assumenda dolor earum ullam dicta unde qui
                      quod quasi, autem explicabo alias in vitae mollitia vel
                      officiis, dignissimos amet laudantium!
                    </dd>
                  </div>
                </Fade>

                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <div className="flex flex-col items-start">
                    <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                      <CalendardayIcon className="h-6 w-6 text-white" />
                    </div>
                    <dt className="mt-4 font-semibold text-muted-foregroun">
                      weekly
                    </dt>
                    <dd className="mt-2 leading-7">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Animi, maiores assumenda dolor earum ullam dicta unde qui
                      quod quasi, autem explicabo alias in vitae mollitia vel
                      officiis, dignissimos amet laudantium!
                    </dd>
                  </div>
                </Fade>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
