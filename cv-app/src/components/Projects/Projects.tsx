'use client';
// This is a client component

import { useState } from 'react';

interface AboutMeProps {
  data: {
    name: string;
    description: string;
    github: string;
    startDate: string;
    endDate: string;
  }[];

  setData: (
    data: {
      name: string;
      description: string;
      github: string;
      startDate: string;
      endDate: string;
    }[]
  ) => void;
}

function Projects({ data, setData }: AboutMeProps) {
  const [localData, setLocalData] = useState(data);
  const [isEditable, setIsEditable] = useState<boolean[]>(
    data.map(() => false)
  ); // Initialize with `false` for all projects
  const handleInputChange =
    (index: number, field: keyof (typeof localData)[0]) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedProject = [...localData];
      updatedProject[index] = {
        ...updatedProject[index],
        [field]: event.target.value,
      };
      setLocalData(updatedProject);
    };

  const handleSubmit = (index: number) => {
    //Add an empty project to the list
    const newProject = {
      name: '',
      description: '',
      github: '',
      startDate: '',
      endDate: '',
    };
    const updatedLocalData = [...localData, newProject];
    //Update the data in the parent component
    setLocalData(updatedLocalData);
    //Update the data in the prop
    setData(updatedLocalData);
    // Add a new `false` value to the `isEditable` array for the new project
    const updatedIsEditable = [...isEditable, false];
    updatedIsEditable[index] = true; // Set the current project to editable
    setIsEditable(updatedIsEditable);
  };

  const handleDelete = (index: number) => {
    const updatedLocalData = localData.filter((_, i) => i !== index);
    setLocalData(updatedLocalData);
    setData(updatedLocalData);
    // Remove the corresponding `isEditable` value
    const updatedIsEditable = isEditable.filter((_, i) => i !== index);
    setIsEditable(updatedIsEditable);
  };

  const handleUpdate = (index: number) => {
    const updatedData = [...localData];
    updatedData[index] = {
      ...updatedData[index],
      name: localData[index].name,
      description: localData[index].description,
      github: localData[index].github,
      startDate: localData[index].startDate,
      endDate: localData[index].endDate,
    };
    setLocalData(updatedData);
    setData(updatedData);
  };
  return (
    <div className="flex flex-col space-y-4 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Projects'}
      </label>

      {localData.map((project, index) => (
        <div key={index} className="border p-4 rounded-md space-y-2">
          {/* Name */}
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={project.name}
            onChange={handleInputChange(index, 'name')}
            placeholder="Enter the name here"
          />

          {/* Description */}
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={project.description}
            onChange={handleInputChange(index, 'description')}
            placeholder="Enter short description here"
          />

          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={project.github}
            onChange={handleInputChange(index, 'github')}
            placeholder="Enter the GitHub link here"
          />

          {/* GitHub and Start Date */}
          <div className="flex flex-row space-x-4">
            <input
              type="date"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={project.startDate}
              onChange={handleInputChange(index, 'startDate')}
            />

            {/* End Date */}
            <input
              type="date"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={project.endDate}
              onChange={handleInputChange(index, 'endDate')}
            />
          </div>
          {/* Update Button */}
          {isEditable[index] == true && (
            <button
              onClick={() => handleUpdate(index)}
              className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update Project
            </button>
          )}

          {/* Delete Button */}
          {localData.length > 1 && (
            <button
              onClick={() => handleDelete(index)}
              className="w-full mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          )}
          {/* Add Button */}

          {index === localData.length - 1 &&
            (localData[index].description &&
              localData[index].name &&
              localData[index].github) != '' && (
              <button
                onClick={() => handleSubmit(index)}
                className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add New Project
              </button>
            )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
