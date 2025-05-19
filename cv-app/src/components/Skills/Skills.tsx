'use client';
// This is a client component

import { useState } from 'react';

interface SkillsProps {
  data: {
    skill: string;
    desc: string;
  }[];
  setData: (
    data: {
      skill: string;
      desc: string;
    }[]
  ) => void;
}

function Skills({ data, setData }: SkillsProps) {
  const [localData, setLocalData] = useState(data);
  const [isEditable, setIsEditable] = useState<boolean[]>(
    data.map(() => false)
  ); // Initialize with `false` for all projects

  const handleInputChange =
    (index: number, field: keyof (typeof localData)[0]) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedSkills = [...localData];
      updatedSkills[index] = {
        ...updatedSkills[index],
        [field]: event.target.value,
      };
      setLocalData(updatedSkills);
    };

  const handleSubmit = (index: number) => {
    // Add an empty Skills to the list
    const newSkills = {
      skill: '',
      desc: '',
    };
    const updatedLocalData = [...localData, newSkills];
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
      skill: localData[index].skill,
      desc: localData[index].desc,
    };
    setLocalData(updatedData);
    setData(updatedData);
  };
  return (
    <div className="flex flex-col space-y-4 w-full max-w-md mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Skills'}
      </label>

      {localData.map((skills, index) => (
        <div key={index} className="border p-4 rounded-md space-y-2">
          <div className="flex flex-col space-y-4 w-96 mx-auto">
            {/* skill  */}
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={skills.skill}
                onChange={handleInputChange(index, 'skill')}
                placeholder="Enter the skill  name here"
              />
            </div>

            {/* desc */}
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={skills.desc}
                onChange={handleInputChange(index, 'desc')}
                placeholder="Enter the description here"
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
              (localData[index].skill && localData[index].desc) != '' && (
                <button
                  onClick={() => handleSubmit(index)}
                  className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add
                </button>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
