'use client';
// This is a client component

import { useState } from 'react';

interface ExperienceProps {
  data: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  }[];
  setData: (
    data: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
    }[]
  ) => void;
}

function Experience({ data, setData }: ExperienceProps) {
  const [localData, setLocalData] = useState(data);

  const handleInputChange =
    (index: number, field: keyof (typeof localData)[0]) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedExperience = [...localData];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: event.target.value,
      };
      setLocalData(updatedExperience);
    };

  const handleSubmit = () => {
    // Add an empty experience to the list
    const newExperience = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
    };
    const updatedLocalData = [...localData, newExperience];
    // Update the data in the parent component
    setLocalData(updatedLocalData);
    // Update the data in the prop
    setData(updatedLocalData);
    setData(localData);
  };

  const handleDelete = (index: number) => {
    const updatedLocalData = localData.filter((_, i) => i !== index);
    setLocalData(updatedLocalData);
    setData(updatedLocalData);
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-md mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Experience'}
      </label>

      {localData.map((experience, index) => (
        <div key={index} className="border p-4 rounded-md space-y-2">
          <div className="flex flex-col space-y-4 w-96 mx-auto">
            {/* Company */}
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experience.company}
                onChange={handleInputChange(index, 'company')}
                placeholder="Enter the company name here"
              />
            </div>

            {/* Position */}
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experience.position}
                onChange={handleInputChange(index, 'position')}
                placeholder="Enter your position here"
              />
            </div>

            {/* Dates */}
            <div className="flex flex-row space-x-4">
              <input
                type="date"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experience.startDate}
                onChange={handleInputChange(index, 'startDate')}
                placeholder="Enter the start date here"
              />
              <input
                type="date"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experience.endDate}
                onChange={handleInputChange(index, 'endDate')}
                placeholder="Enter the end date here"
              />
            </div>

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
              (localData[index].company && localData[index].position) != '' && (
                <button
                  onClick={handleSubmit}
                  className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add New Project
                </button>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
