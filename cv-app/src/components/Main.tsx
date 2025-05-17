'use client';

import AboutMe from '@/components/AboutMe';
import Display from '@/components/Display';
import Experience from '@/components/Experience';
import { useState } from 'react';

function Main() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    github: '',
    linkedin: '',
  });
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  return (
    <div className="flex flex-row h-screen">
      {/* Left Column */}

      <div className="flex-1 bg-gray-500 p-4 h-full border border-red-500">
        <AboutMe data={personalInfo} setData={setPersonalInfo} />
        <Experience data={experience} setData={setExperience} />
      </div>

      {/* Right Column */}
      <div className="flex-1 bg-gray-500 p-4 h-full border border-red-500">
        <Display
          personalData={personalInfo}
          data={experience}
          setPersonalData={setPersonalInfo}
          setData={setExperience}
        />
      </div>
    </div>
  );
}
export default Main;
