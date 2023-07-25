import React from "react";
import '../App.css'

export default function About() {
    return (
        <div className="max-w-5xl h-64 font-poppins mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <h2 className="text-2xl mb-2 font-semibold text-center">About Me</h2>
                <p className="text-gray-700 text-base">
                I'm just a regular guy!
                </p>
            </div>
            </div>
        </div>
    );
}