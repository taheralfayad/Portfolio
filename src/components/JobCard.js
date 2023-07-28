import React from 'react';

export default function JobCard() {
    return (
        <div className="w-64 mx-auto bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:rotate-12 cursor-pointer">
            <div className="relative pb-48">
                <img className="h-48 w-full object-cover object-center" src={job.image} alt={job.company}/>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <h3 className="text-xl text-gray-500">{job.company}</h3>
                <p className="text-md text-gray-800">{job.period}</p>
                <div className="mt-4">
                    <button className="text-white bg-indigo-500 hover:bg-indigo-600 rounded-md px-2 py-1 transition">More Details</button>
                </div>
            </div>
        </div>
    );
};
