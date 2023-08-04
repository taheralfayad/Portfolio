import React from "react";

export default function Experience() {
    const jobs = [
    {
      company: "University of Central Florida",
      role: "Software Developer",
      duration: "08/2022 - Present",
      responsibilities: 
      "As a software developer at the University of Central Florida. I was tasked with creating and maintaining accessible educational software " +
      "using technologies such as: React, Vue.js, Django, Docker, and PHP; for students and faculty alike." + " More specifically, I worked on " +
      "the captioning ecosystem that serves UCF, as well as the award-winning open-source accessibility scanner UDOIT.",
    },
    {
      company: "Taher Tutors",
      role: "Tutor/Private Practice",
      duration: "07/2022 - Present",
      responsibilities: "Complimenting my job as a software developer, I also offer tutoring services to fellow students at UCF. " +
      "I have tutored core computer science concepts such as Data Structures and Algorithms, Computer Logic and Organization, Object-oriented " +
      "programming, and programming in C. After receiving my tutoring services, the average grade of students went up by 15%.",
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

