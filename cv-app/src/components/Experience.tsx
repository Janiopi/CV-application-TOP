'use client';
// This is a client component

import { useState } from 'react';

interface ExperienceProps {
  data: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  };
  setData: (data: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  }) => void;
}

function Experience({ data, setData }: ExperienceProps) {
  const [localData, setLocalData] = useState(data);

  const handleInputChange =
    (field: keyof typeof localData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalData({ ...localData, [field]: event.target.value });
    };

  const handleSubmit = () => {
    setData(localData);
    setLocalData({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="flex flex-col space-y-4 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Experience'}
      </label>
      {/* Company */}
      <div className="flex flex-row">
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localData.company}
          onChange={handleInputChange('company')}
          placeholder="Enter the company name here"
        />
      </div>

      {/* Position */}
      <div className="flex flex-row">
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localData.position}
          onChange={handleInputChange('position')}
          placeholder="Enter your position here"
        />
      </div>

      {/* Dates */}
      <div className="flex flex-row space-x-4">
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localData.startDate}
          onChange={handleInputChange('startDate')}
          placeholder="Enter the start date here"
        />
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localData.endDate}
          onChange={handleInputChange('endDate')}
          placeholder="Enter the end date here"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default Experience;
