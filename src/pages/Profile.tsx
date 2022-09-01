import React from "react";

const Profile = () => {

    return(
        <div className="flex h-screen bg-slate-800 justify-center items-center">
            <div className="flex relative h-full justify-center items-center">
                <div className="HiBackground absolute h-10 w-full blur-lg bg-gradient-to-br from-purple-700 to-blue-700 p-2 justify-center items-center">
                </div>
                <div className=" Hi  h-auto flex font-serif rounded-lg divide-x-2 justify-center items-center relative bg-black text-slate-300 text-2xl text-center ">
                    <p className="p-2"> Welcome to my Portfolio</p>
                    <p className="p-2"> Sunil</p>
                </div>
            </div>
        </div>


    )
}
export default Profile