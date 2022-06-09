import React from "react";
import { MdOutlineCleaningServices, MdBolt, MdGroups } from "react-icons/md";
import personal from "./images/undraw_personal_info_re_ur1n.svg"
const WhyMe = () => {
  return (
    <section class="text-[#071A14] body-font mt-10">
      <h1 className="text-center text-5xl font-semibold text-[#071A14]">
        Why Me?
      </h1>
      <div class="container px-5 pt-10 pb-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src={personal}
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#21654E] text-[#21654E] bg-opacity-20 mb-5">
              <MdOutlineCleaningServices className="text-3xl"/>
            </div>
            <div class="flex-grow">
              <h2 class=" text-lg title-font font-medium mb-3">Clean Coder</h2>
              <p class="leading-relaxed text-base">
                The code I write is cleaner than usual developers. I use better
                linting along with necessiry comments that helps my code to be
                understandable to anyone easily.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#21654E] text-[#21654E] bg-opacity-20 mb-5">
              <MdBolt className="text-3xl"/>
            </div>
            <div class="flex-grow">
              <h2 class=" text-lg title-font font-medium mb-3">Fast learner</h2>
              <p class="leading-relaxed text-base">
                I love to learn new things everyday, for this reason I can learn faster. So it is easier to me to learn a new technology an use it on the next project!
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#21654E] text-[#21654E] bg-opacity-20 mb-5">
              <MdGroups className="text-3xl"/>
            </div>
            <div class="flex-grow">
              <h2 class=" text-lg title-font font-medium mb-3">The team guy</h2>
              <p class="leading-relaxed text-base">
                Working in a team is a great skill to me. I am very social so I can cope up with any situation in a team. I can tie the whole team in a single knot that can provide the best value. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
