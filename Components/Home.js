import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-[calc(100vh-36em)]">
    <div className="flex flex-col mt-[calc(100vh - 4rem)] items-center justify-center gap-20">
      <div className="text-center w-11/12 items-center md:w-8/12 flex flex-col">
        <h1 className="text-[30px] md:text-[56px] leading-tight font-extrabold">
          The most comprehensive User Management Platform
        </h1>

        <p className="text-center mt-5 text-[16px] md:text-[18px] text-gray-500 md:w-9/12">
          Need more than just a sign-in box? Clerk is a complete suite of
          embeddable UIs, flexible APIs, and admin dashboards to authenticate
          and manage your users.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-5">
            <button className=" bg-clerk-gradient items-center text-white text-[14px] font-bold pl-[14px] pr-[14px] pt-[6px] pb-[6px] rounded-[10px]">Start building for free</button>
            <button className="text-gray-900 text-[14px] font-medium">Watch Demo <span className="text-gray-400 text-[12px] ml-1">2 min</span></button>
        </div>
      </div>
      </div>

      <div className="flex flex-col md:flex-row mt-16 md:mt-20 mb-5 gap-10 align-middle items-center md:items-start justify-center">
          <div className=" text-center md:text-start w-7/12 md:w-2/12">
            <h2 className="text-[16px] text-gray-900">Trusted by fast-growing companies around the world</h2>
          </div>

          <div className="flex items-center justify-center md:justify-normal md:items-start flex-row flex-wrap align-middle gap-6">
            <div>
              <Image src='/clerktest1.webp' width={88} height={18}/>
              </div>

              <div>
              <Image src='/clerktest2.svg' width={88} height={18}/>
              </div>

              <div>
              <Image src='/clerktest-3.svg' width={88} height={18}/>
              </div>

              <div>
              <Image src='/clerktest4.svg' width={88} height={18}/>
              </div>

              <div>
              <Image src='/clerktest5.svg' width={88} height={18}/>
              </div>

              <div>
              <Image src='/clerktest6.svg' width={88} height={18}/>
              </div>

              <div>
              <Image src='/clerktest-7.svg' width={88} height={18}/>
              </div>

              <div>
              <Image src='/clerktest9.svg' width={88} height={18}/>
              </div>

          </div>
      </div>
    </div>
  );
};

export default Home;
