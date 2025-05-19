'use client';
// This is a client component

import { useState } from 'react';

interface EducationProps {
  data: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  setData: (
    data: {
      institution: string;
      degree: string;
      startDate: string;
      endDate: string;
    }[]
  ) => void;
}

function Education({ data, setData }: EducationProps) {
  const [localData, setLocalData] = useState(data);
  const [isEditable, setIsEditable] = useState<boolean[]>(
    data.map(() => false)
  ); // Initialize with `false` for all projects

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

  const handleSubmit = (index: number) => {
    // Add an empty experience to the list
    const newEducation = {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    };
    const updatedLocalData = [...localData, newEducation];
    // Update the data in the parent component
    setLocalData(updatedLocalData);
    // Update the data in the prop
    setData(updatedLocalData);
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
      institution: localData[index].institution,
      degree: localData[index].degree,
      startDate: localData[index].startDate,
      endDate: localData[index].endDate,
    };
    setLocalData(updatedData);
    setData(updatedData);
  };
  return (
    <div className="flex flex-col space-y-4 w-full max-w-md mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Education'}
      </label>

      {localData.map((experience, index) => (
        <div key={index} className="border p-4 rounded-md space-y-2">
          <div className="flex flex-col space-y-4 w-96 mx-auto">
            {/* institution */}
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experience.institution}
                onChange={handleInputChange(index, 'institution')}
                placeholder="Enter the institution name here"
              />
            </div>

            {/* degree */}
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experience.degree}
                onChange={handleInputChange(index, 'degree')}
                placeholder="Enter your degree here"
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
            {/* Update Button */}
            {isEditable[index] == true && (
              <button
                onClick={() => handleUpdate(index)}
                className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update
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
              (localData[index].institution && localData[index].degree) !=
                '' && (
                <button
                  onClick={() => handleSubmit(index)}
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

export default Education;
