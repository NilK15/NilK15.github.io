import React from "react";
import { ImportsNotUsedAsValues } from "typescript";

const Profile = () => {

    return(
        <div className="flex h-screen bg-dark-picture bg-center bg-fixed justify-center ">
            <div className="flex flex-col relative h-full ">
                <div className="HoverGroupContainer group mt-48">
                    <div className="HiBackground absolute h-14 w-full blur-md group-hover:blur-lg bg-gradient-to-br from-purple-400 to-blue-700 justify-center items-center">
                    </div>
                    <div className=" Hi h-14 flex shadow-lg shadow-slate-900 font-serif text-xl rounded-xl divide-x divide-gray-600 justify-center items-center relative bg-black text-slate-300  text-center ">
                        <p className="p-3 text-3xl"> Welcome to my Portfolio </p>
                        <p className="px-2 text-blue-400"> Sunil Khatri</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" self-center animate-bounce text-white w-10 h-10 absolute bottom-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </div>


    )
}
export default Profile