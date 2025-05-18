'use client';
// This is a client component

interface DisplayProps {
  data: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  }[];
}

function ExperienceDisplay({ data }: DisplayProps) {
  return (
    <div className="flex flex-col space-y-2 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Experience'}
      </label>

      {data.map((exp, index) => (
        <div key={index}>
          <p>Company: {exp.company} </p>
          <p>Position: {exp.position}</p>
          <p>Start Date: {exp.startDate}</p>
          <p>End Date: {exp.endDate}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceDisplay;
