'use client';
// This is a client component

import { useState, useEffect } from 'react';

interface GenericFieldProps {
  title: string;
  description?: string;
}

function GenericField({ title, description }: GenericFieldProps) {
  const [inputValue, setInputValue] = useState('');
  const [valuesList, setValuesList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{title}</label>
      <input
        type="text"
        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      />
      <button
        onClick={() => {
          setValuesList((prevValues) => {
            const newValues = [...prevValues, inputValue];
            return newValues;
          });
        }}
        className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {' '}
        Add{' '}
      </button>
      <button
        onClick={() => {
          setValuesList([]);
          setInputValue('');
        }}
        className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {' '}
        Clear List{' '}
      </button>

      <p className="text-sm text-gray-500">{description}</p>
      <ul>
        {valuesList.map((value, index) => (
          <li key={index} className="text-sm text-gray-700">
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenericField;
