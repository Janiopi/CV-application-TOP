'use client';
// This is a client component

import { useState } from 'react';

interface DisplayProps {
  personalData: {
    name: string;
    phone: string;
    email: string;
    address: string;
    github: string;
    linkedin: string;
  };
  setPersonalData: (data: {
    name: string;
    phone: string;
    email: string;
    address: string;
    github: string;
    linkedin: string;
  }) => void;
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

function Display({ data, personalData }: DisplayProps) {
  return (
    <div className="flex flex-col space-y-4 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Personal Information'}
      </label>

      <div className="flex flex-row">
        <label className="text-sm font-medium text-white-700 text-center">
          {'Name : '}
        </label>
        <label className="text-sm font-medium text-white-700 text-center">
          {' ' + personalData.name}
        </label>
      </div>

      <div className="flex flex-row">
        <label className="text-sm font-medium text-white-700 text-center">
          {'Phone : '}
        </label>
        <label className="text-sm font-medium text-white-700 text-center">
          {personalData.phone}
        </label>
      </div>

      <div className="flex flex-row">
        <label className="text-sm font-medium text-white-700 text-center">
          {'Company : '}
        </label>
        <label className="text-sm font-medium text-white-700 text-center">
          {personalData.email}
        </label>
      </div>

      <div className="flex flex-row">
        <label className="text-sm font-medium text-white-700 text-center">
          {'Address : '}
        </label>
        <label className="text-sm font-medium text-white-700 text-center">
          {personalData.address}
        </label>
      </div>

      <div className="flex flex-row">
        <label className="text-sm font-medium text-white-700 text-center">
          {'Github : '}
        </label>
        <label className="text-sm font-medium text-white-700 text-center">
          {personalData.github}
        </label>
      </div>

      <div className="flex flex-row">
        <label className="text-sm font-medium text-white-700 text-center">
          {'Linkedin : '}
        </label>
        <label className="text-sm font-medium text-white-700 text-center">
          {personalData.linkedin}
        </label>
      </div>
    </div>
  );
}

export default Display;
