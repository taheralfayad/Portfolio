const Project = ({ project }) => (
    <div className="flex items-center mb-16">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="h-16 w-16 bg-slate-400 rounded-full"></div>
          <div className="absolute top-0 right-0 h-6 w-6 bg-red-300 rounded-full border-2 border-white"></div>
        </div>
      </div>
      <div className="ml-4 max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-64 object-cover" /> {/* <-- added fixed height and object cover here */}
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
    </div>
  );
  

  export default Project