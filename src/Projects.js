import React, { useEffect, useState } from "react";
import mirehouse from "./images/Screenshot_2.png";
import toolux from "./images/Toolux.png";
import gymgainer from "./images/gymgainer.png";
import { Link } from "react-router-dom";
const Projects = () => {
 
  return (
    <section className="container mx-auto">
      <h1 className="text-center text-5xl font-semibold text-[#071A14]">
        My Recent Projects
      </h1>

      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={mirehouse}
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest uppercase text-xs title-font font-medium text-gray-400 mb-1">
                  full stack website
                </h2>
                <h1 class="title-font text-lg font-medium text-[#071A14] mb-3">
                  MireHouse
                </h1>
                <p class="leading-relaxed mb-3">
                  A website for warehouse management with some features.
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link to="/project/1" 
                    class="text  inline-flex items-center md:mb-2 lg:mb-0 text-[#21654E]"
                    href="https://the-summit-gear.web.app/"
                  >
                   Project Details
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={toolux}
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  FULL STACK WEBSITE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Toolux
                </h1>
                <p class="leading-relaxed mb-3">
                  A website for tools and hardware manufacturer.
                </p>
                <div class="flex items-center flex-wrap">
                  <Link to="/project/2"
                    class="text-[#21654E] inline-flex items-center md:mb-2 lg:mb-0"
                    href="https://hilly-view.web.app/"
                  >
                    Project Details 
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={gymgainer}
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  FRONTEND WEBSITE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  GymGainer
                </h1>
                <p class="leading-relaxed mb-3">
                  this is a website for a gym trainer .
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link to="/project/3"  class="text  inline-flex items-center md:mb-2 lg:mb-0 text-[#21654E]">
                    Project Details 
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
