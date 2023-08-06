 import React from 'react';
import Project from './Project'
import rexsiteVid from '../static/rexsite.mp4'
import slackOverflowVid from '../static/slackOverflow.mp4'
import scribeVid from '../static/scribe.mp4'

export default function Projects() {
  let rexsiteDesc = "This was my first ever website and forray into software development. I volunteered to create a tennis " + 
                    "reservation website for my previous job at the City of Maitland. The backend of the website was created using the Django framework" +
                    "and the front-end was created using HTML/CSS and JavaScript. The modus operandi at the office was " +
                    "to have customers call in to make their reservations with the attendant. I identified that to be a painpoint " +
                    'with all of the customers and thought to myself, "well, how hard can it be to change this?"'
  let slackOverflowDesc = "Out of all the projects that I have created, this one is probably my favorite. Slack Overflow is an issue repository not unlike Stack Overflow. " +
                          "The key differences (aside from sheer scale) are: a.) the fact that Slack Overflow documents issues that are faced by developers on internal applications, " +
                          "and b.) the ability for developers to ask and answer questions directly from Slack. The backend of the website was created using Django with a SQLite database, with a frontend made using HTML/CSS and JavaScript. " + 
                          "It also has API endpoints that were built using the Django Rest Framework to facilitate communication with the Slack API. " +
                          "Finally, the application is supplied with event listeners that await any slash commands from Slack."
  let scribeDesc = "Scribe.py is a simple python script that allows users to upload a file of any video/audio format, and have that file be transcribed and summarized. " +
                    "The application uses the open-source speech-to-text model Whisper to create a transcript of the provided video, and then sends the transcript to ChatGPT " +
                    "to get a summary. Users can update the system prompt to have ChatGPT write the summary in whatever format they desire. The notes are then sent to Slack using the Slack API. " +
                    "The reason that this application was created  was because the junior developers at my current job have to take notes for the stand-up meetings, and I thought that I could " +
                    "automate the process, and so I did. Scribe.py is still in active use at my job."
  const projects = [
    { id: 1, title: 'Rexsite', description: rexsiteDesc, year: '2023', video: rexsiteVid, link: "https://github.com/taheralfayad/tennis-rez" },
    { id: 2, title: 'Slack Overflow', description: slackOverflowDesc, year: '2022', video: slackOverflowVid, link: "https://github.com/taheralfayad/slackOverflow" },
    { id: 3, title: 'Scribe.py', description: scribeDesc, year: '2021', video: scribeVid, link: "https://github.com/taheralfayad/tr_weekly"},
  ];

  return(
    <div className="p-0 sm:p-8 font-poppins">
      <h1 className="text-4xl font-bold mb-4 text-center p-8 sm:p-0 sm:pb-8">Projects</h1>
      <div className="relative">
        <div className="object-cover hidden md:block border-r-2 border-slate-400  absolute h-full top-0" style={{ left: '15px' }}></div>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

