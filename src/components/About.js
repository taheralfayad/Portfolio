import React from "react";
import '../App.css'

export default function About() {
    return (
        <div className="max-w-5xl font-poppins mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <h2 className="text-2xl mb-2 font-semibold text-center">About Me</h2>
                <p className="text-gray-700 text-base">
                I'm a junior computer science student at the University of Central Florida, expecting to graduate in May of 2025. My journey to this point has been an unconventional one.
                I began my academic career as a political science major, dead set on that path until I created my first website (a topic I'll discuss in more detail later). That experience 
                sparked a passion for technology that led me to switch fields. I now have professional experience in web development, utilizing technologies such as React, Vue.js, Symfony, and Django.
                On the academic side, I've engaged in extensive coursework related to or involving Java and C. Despite my current focus on web development, I recognize that I'm still young and my interests in software 
                development are broad and varied. From embedded software to artificial intelligence, I'm eager to explore it all!
                When I'm not immersed in programming, I enjoy spending my free time riding my bicycle, playing soccer, and exploring nature.
                </p>
            </div>
            </div>
        </div>
    );
}