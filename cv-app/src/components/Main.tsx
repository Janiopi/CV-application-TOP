'use client';

import AboutMe from '@/components/AboutMe/AboutMe';
import Skills from './Skills/Skills';

import Experience from '@/components/Experience/Experience';
import Education from './Education/Education';
import { useState } from 'react';
import Projects from './Projects/Projects';
import { DM_Sans } from 'next/font/google';
import AboutMeDisplay from './AboutMe/AboutMeDisplay';
import ProjectsDisplay from './Projects/ProjectsDisplay';
import ExperienceDisplay from './Experience/ExperienceDisplay';
import EducationDisplay from './Education/EducationDisplay';
import SkillDisplay from './Skills/SkillsDisplay';
function Main() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
    github: '',
    linkedin: '',
  });
  const [experience, setExperience] = useState([
    {
      //array of experience
      company: '',
      position: '',
      startDate: '',
      endDate: '',
    },
  ]);
  const [projects, setProjects] = useState([
    {
      //array of projects
      name: '',
      description: '',
      github: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const [education, setEducation] = useState([
    {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
  ]);
  const [skills, setSkills] = useState([
    {
      skill: '',
      desc: '',
    },
  ]);

  return (
    <div className="flex flex-row h-screen">
      {/* Left Column */}

      <div className="flex-1 bg-gray-500 p-4 h-full border border-red-500 overflow-y-auto">
        <AboutMe data={personalInfo} setData={setPersonalInfo} />
        <Education data={education} setData={setEducation} />
        <Skills data={skills} setData={setSkills} />
        <Experience data={experience} setData={setExperience} />
        <Projects data={projects} setData={setProjects} />
      </div>

      {/* Right Column */}
      <div className="flex-1 bg-gray-500 p-4 h-full border border-red-500 overflow-y-auto">
        <AboutMeDisplay data={personalInfo}></AboutMeDisplay>
        <EducationDisplay data={education}></EducationDisplay>
        <SkillDisplay data={skills}></SkillDisplay>
        <ExperienceDisplay data={experience}></ExperienceDisplay>
        <ProjectsDisplay data={projects}></ProjectsDisplay>
      </div>
    </div>
  );
}
export default Main;
