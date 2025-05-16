'use client';
// This is a client component

import { useState } from 'react';

interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
}

function Experience({
  company,
  position,
  startDate,
  endDate,
}: ExperienceProps) {
  const [localcompany, setLocalCompany] = useState('');
  const [localposition, setLocalPosition] = useState('');
  const [localstartDate, setLocalStartDate] = useState('');
  const [localendDate, setLocalEndDate] = useState('');

  const handleChangeCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalCompany(event.target.value);
  };
  const handleChangePosition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalPosition(event.target.value);
  };
  const handleChangeStartDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalStartDate(event.target.value);
  };
  const handleChangeEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalEndDate(event.target.value);
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
          value={localcompany}
          onChange={handleChangeCompany}
          placeholder="Enter the company name here"
        />
      </div>

      {/* Position */}
      <div className="flex flex-row">
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localposition}
          onChange={handleChangePosition}
          placeholder="Enter your position here"
        />
      </div>

      {/* Dates */}
      <div className="flex flex-row space-x-4">
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localstartDate}
          onChange={handleChangeStartDate}
          placeholder="Enter the start date here"
        />
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={localendDate}
          onChange={handleChangeEndDate}
          placeholder="Enter the end date here"
        />
      </div>
      <button
        onClick={() => {
          handleChangeCompany;
        }}
        className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default Experience;
