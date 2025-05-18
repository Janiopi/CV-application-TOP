'use client';
// This is a client component

interface DisplayProps {
  data: {
    name: string;
    description: string;
    github: string;
    startDate: string;
    endDate: string;
  }[];
}

function ProjectsDisplay({ data }: DisplayProps) {
  return (
    <div className="flex flex-col space-y-2 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Projects'}
      </label>

      {data.map((project, index) => (
        <div key={index}>
          <p>Project name: {project.name} </p>
          <p>Description: {project.description}</p>
          <p>Github: {project.github}</p>
          <p>Start Date: {project.startDate}</p>
          <p>End Date: {project.endDate}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsDisplay;
