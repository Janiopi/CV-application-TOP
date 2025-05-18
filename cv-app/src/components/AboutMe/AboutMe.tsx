'use client';
// This is a client component

import { useState } from 'react';

interface AboutMeProps {
  data: {
    name: string;
    phone: string;
    email: string;
    address: string;
    github: string;
    linkedin: string;
  };
  setData: (data: {
    name: string;
    phone: string;
    email: string;
    address: string;
    github: string;
    linkedin: string;
  }) => void;
}

function AboutMe({ data, setData }: AboutMeProps) {
  const [localData, setLocalData] = useState(data);
  const [isEditable, setIsEditable] = useState(false);
  const handleInputChange =
    (field: keyof typeof localData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalData({ ...localData, [field]: event.target.value });
    };

  const handleSubmit = () => {
    setData(localData);
    setIsEditable(true);
  };

  const handleDelete = () => {
    setLocalData({
      name: '',
      phone: '',
      email: '',
      address: '',
      github: '',
      linkedin: '',
    });
    setData({
      name: '',
      phone: '',
      email: '',
      address: '',
      github: '',
      linkedin: '',
    });
    setIsEditable(false);
  };

  return (
    <div className="flex flex-col space-y-4 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'About Me'}
      </label>
      <div className="border p-4 rounded-md space-y-2">
        {/* Name */}
        <div className="flex flex-row">
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={localData.name}
            onChange={handleInputChange('name')}
            placeholder="Enter your name here"
          />
        </div>

        {/* Address */}
        <div className="flex flex-row">
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={localData.address}
            onChange={handleInputChange('address')}
            placeholder="Enter your address here"
          />
        </div>

        {/* Phone and Email */}
        <div className="flex flex-row space-x-4">
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={localData.phone}
            onChange={handleInputChange('phone')}
            placeholder="Enter your phone here"
          />
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={localData.email}
            onChange={handleInputChange('email')}
            placeholder="Enter your email here"
          />
        </div>

        {/* Github and Linkedin */}
        <div className="flex flex-row space-x-4">
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={localData.github}
            onChange={handleInputChange('github')}
            placeholder="Enter your github here"
          />
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={localData.linkedin}
            onChange={handleInputChange('linkedin')}
            placeholder="Enter your linkedin here"
          />
        </div>

        {/* Add Button */}
        {isEditable == false &&
          localData.name &&
          localData.phone &&
          localData.email &&
          localData.address &&
          localData.github &&
          localData.linkedin && (
            <button
              onClick={handleSubmit}
              className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          )}
        {/* Update Button */}
        {isEditable == true &&
          localData.name &&
          localData.phone &&
          localData.email &&
          localData.address &&
          localData.github &&
          localData.linkedin && (
            <button
              onClick={handleSubmit}
              className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          )}

        {/* Delete Button */}
        {localData.name &&
          localData.phone &&
          localData.email &&
          localData.address &&
          localData.github &&
          localData.linkedin && (
            <button
              onClick={handleDelete}
              className="w-full mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-blue-600"
            >
              Delete
            </button>
          )}
      </div>
    </div>
  );
}

export default AboutMe;
