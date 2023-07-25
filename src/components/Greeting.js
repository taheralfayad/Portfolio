import React from "react";
import '../App.css'
import me from '../static/me.jpg'


export default function Greeting() {
  return (
    <div className="h-screen container mx-auto text-black font-poppins flex items-center justify-center pt-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 p-40">
            <div className="flex flex-col w-full justify-center items-start pt-12 pb-24 px-6 bg-white rounded-lg shadow-md p-6 md:mr-10">
                <h1 className="font-headings text-3xl mb-2">Hello!</h1>
                <p className="mb-8 text-lg">
                    My name is Taher, but you can call me your next developer ;)
                </p>
            </div>
            <div className="w-full lg:w-1/2 lg:py-6 text-center">
                <img className="rounded-full shadow-xl w-full mx-auto" src={me} alt="Taher" />
            </div>
        </div>
        
    </div>
    
  );
}
