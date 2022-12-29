import React from "react";
import { ImportsNotUsedAsValues } from "typescript";

const Profile = () => {
  return (
    <div className="flex h-screen bg-mountain bg-center bg-cover pb-28">
      <div className="flex flex-col relative items-center w-full h-full gap-32 ">
        <div className="flex w-full justify-center sm:justify-center md:justify-start lg:justify-start ">
          <div className="HoverGroupContainer flex flex-col w-96 group mt-20 ">
            <div className=" flex md:ml-14 ml-0 flex-col w-96 h-24 max-w-lg ">
              <div className="HiBackground absolute h-24 w-96 blur-md duration-500 bg-gradient-to-br from-purple-600 to-blue-700 justify-center items-center"></div>
              <div className=" Hi flex w-full h-full  font-serif text-xl rounded-xl justify-center items-center relative bg-black text-slate-300 text-center ">
                <p className="p-3 text-5xl"> Welcome. </p>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" self-center animate-bounce text-white w-10 h-10 absolute bottom-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
        <div className="flex w-full justify-center">
          <div className="HoverGroupContainer relative flex flex-col items-center justify-center group w-3/4 h-96">
            <div className="HiBackground max-w-3xl absolute w-full h-80 md:h-60 lg:h-60 blur-md duration-500 bg-gradient-to-br from-blue-700 to-purple-600 justify-center items-center"></div>
            <div className=" Hi h-80 md:h-60 lg:h-60 gap-28 max-w-3xl w-full flex flex-col  font-serif text-xl rounded-xl items-center relative bg-black text-slate-300 text-center ">
              <div className="flex flex-col ">
                <div className=" Hi flex w-full h-full mt-4 mb-4 font-serif text-xl rounded-xl divide-x divide-gray-600 justify-center items-center relative bg-black text-slate-300 text-center ">
                  <p className=" text-3xl h-full mr-2">About me</p>
                  <p className="px-2 text-purple-400 group-hover:text-blue-400 duration-500">
                    Sunil Khatri
                  </p>
                </div>
                <div className=" flex flex-col justify-center px-2 pt-2 text-lg text-blue-400 group-hover:text-purple-400 duration-500">
                  <blockquote>
                    Thanks for stopping by! <br></br>
                    <br></br>Here I have a few projects I have recently worked.
                    I have a strong passion towards creating beautiful and
                    elegant application designs, coupled with back-end logic to
                    work with databases or consuming APIs.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
