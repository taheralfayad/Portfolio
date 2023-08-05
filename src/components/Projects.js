import React from 'react';
import Project from './Project'
import rexsiteVid from '../static/rexsite.webm'
import slackOverflowVid from '../static/slackOverflow.webm'
import scribeVid from '../static/scribe.mp4'

export default function Projects() {
  let rexsiteDesc = "This was my first ever website and forray into software development. I volunteered to create a tennis " + 
                    "reservation website for my previous job at the City of Maitland. The modus operandi at the office was " +
                    "to have customers call in to make their reservations with the attendant. I identified that to be a painpoint " +
                    'with all of the customers and thought to myself, "well, how hard can it be to change this?"'
  let slackOverflowDesc = "Out of all the projects that I have created, this one is probably my favorite, for all the regular software developer reasons. " +
                          "The first reason is that I was able to identify a non-existent application that I very much wanted to use, that is, " +
                          "an issue repository not unlike Stack Overflow (hence the name), but dedicated specifically to issues in development that " +
                          "previous developers at my job have encountered. The second reason is that I was able to experiment with technology that I have never " +
                          "used before, namely the Slack API. The third and final reason, is that this was my first ever non-work-related team effort, and it felt " +
                          "rejuvenating to collaborate with people on a singular vision of what an application should look like."
  const projects = [
    { id: 1, title: 'Rexsite', description: rexsiteDesc, year: '2023', video: rexsiteVid, link: "https://github.com/taheralfayad/tennis-rez" },
    { id: 2, title: 'Slack Overflow', description: slackOverflowDesc, year: '2022', video: slackOverflowVid, link: "https://github.com/taheralfayad/slackOverflow" },
    { id: 3, title: 'Scribe.py', description: 'Description for project 3', year: '2021', video: scribeVid, link: "https://github.com/taheralfayad/tr_weekly"},
  ];

  return(
    <div className="p-8 font-poppins">
      <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
      <div className="relative m-8">
        <div className="border-r-2 border-slate-400  absolute h-full top-0" style={{ left: '15px' }}></div>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

