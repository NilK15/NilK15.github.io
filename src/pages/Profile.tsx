import React from "react";
import { ImportsNotUsedAsValues } from "typescript";

const Profile = () => {

    return(
        <div className="flex h-screen bg-darkest bg-center bg-fixed  ">
            <div className="flex flex-col relative justify-between w-full h-full ">
                <div className="flex w-full ml-14 ">
                <div className="HoverGroupContainer flex flex-col w-96 group mt-20 ">
                    <div className=" flex flex-col w-96 h-24 ">
                        <div className="HiBackground absolute h-24 w-96 blur-md group-hover:blur-2xl duration-500 bg-gradient-to-br from-purple-600 to-blue-700 justify-center items-center">
                        </div>
                        <div className=" Hi flex w-full h-full shadow-lg shadow-slate-900 font-serif text-xl rounded-xl divide-x divide-gray-600 justify-center items-center relative bg-black text-slate-300 text-center ">
                            <p className="p-3 text-5xl"> Welcome. </p>
                            <p className="px-2 text-blue-400 group-hover:text-purple-400 duration-1000"> Sunil Khatri</p>
                        </div>
                     </div>
                </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" self-center animate-bounce text-white w-10 h-10 absolute bottom-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
                <div className="flex w-full justify-center mb-32">
                <div className="HoverGroupContainer relative flex flex-col items-center justify-center group w-3/4 h-96">
                    <div className="HiBackground absolute w-full h-96 blur-md group-hover:blur-2xl duration-500 bg-gradient-to-br from-blue-700 to-purple-600 justify-center items-center">
                    </div>
                    <div className=" Hi h-96 gap-28 w-full flex flex-col shadow-lg shadow-slate-900 font-serif text-xl rounded-xl items-center relative bg-black text-slate-300 text-center ">
                        <div className="flex flex-col divide-y divide-slate-500 "> 
                            <p className=" text-3xl mt-4 h-full ">  About me  </p>
                            <p> </p>
                        </div>
                        <div className=" flex flex-col justify-center px-2 text-xl text-blue-400 group-hover:text-purple-400 duration-1000">
                            <p> Born in 1990, I have a strong passion towards creating beautiful and elegant application designs and functionality. </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


    )
}
export default Profile