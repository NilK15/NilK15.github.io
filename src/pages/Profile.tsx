import React from "react";
import { ImportsNotUsedAsValues } from "typescript";

const Profile = () => {

    return(
        <div className="flex h-screen bg-dark-picture bg-center bg-fixed justify-center items-center">
            <div className="flex relative h-full justify-center items-center">
                <div className="HiBackground absolute h-14 w-full blur-lg bg-gradient-to-br from-purple-700 to-blue-700 justify-center items-center">
                </div>
                <div className=" Hi h-10 flex font-serif text-xl rounded-lg divide-x divide-gray-600 justify-center items-center relative bg-black text-slate-300  text-center ">
                    <p className="px-2"> Welcome to my Portfolio</p>
                    <p className="px-2"> Sunil</p>
                </div>
            </div>
        </div>


    )
}
export default Profile