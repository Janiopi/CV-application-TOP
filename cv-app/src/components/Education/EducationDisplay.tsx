'use client';
// This is a client component

interface DisplayProps {
  data: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
}

function EducationDisplay({ data }: DisplayProps) {
  return (
    <div className="flex flex-col space-y-2 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Education'}
      </label>

      {data.map((exp, index) => (
        <div key={index}>
          <p>Institution: {exp.institution} </p>
          <p>Degree: {exp.degree}</p>
          <p>Start Date: {exp.startDate}</p>
          <p>End Date: {exp.endDate}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationDisplay;
