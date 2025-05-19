'use client';
// This is a client component

interface DisplayProps {
  data: {
    skill: string;
    desc: string;
  }[];
}

function SkillDisplay({ data }: DisplayProps) {
  return (
    <div className="flex flex-col space-y-2 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Skills'}
      </label>

      {data.map((exp, index) => (
        <div key={index}>
          <p>Skill: {exp.skill} </p>
          <p>Desc: {exp.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillDisplay;
