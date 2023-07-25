import React from "react";

export default function Experience() {
    const jobs = [
    {
      company: "University of Central Florida",
      role: "Software Developer",
      duration: "08/2022 - Present",
      responsibilities: "As a software developer at the University of Central Florida. I did a lot of stuff.",
    },
    {
      company: "Taher Tutors",
      role: "Founder/Private Tutor",
      duration: "07/2022 - Present",
      responsibilities: "As a tutor at etc etc. I did a whole bunch of stuff.",
    },
  ];

  return (
    <div className="font-poppins pt-14">
      <h1 className="text-4xl font-bold mb-4 text-center">Job Experience</h1>
      {jobs.map((job, index) => (
        <div key={index} className="bg-white rounded-lg p-6 m-2 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">{job.company}</h2>
          <h3 className="text-xl mb-2">{job.role}</h3>
          <p className="text-gray-700">{job.duration}</p>
          <p>{job.responsibilities}</p>
        </div>
      ))}
    </div>
  );
};

