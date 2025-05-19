'use client';
// This is a client component

interface DisplayProps {
  data: {
    name: string;
    phone: string;
    email: string;
    description: string;
    github: string;
    linkedin: string;
  };
}

function AboutMeDisplay({ data }: DisplayProps) {
  return (
    <div className="flex flex-col space-y-2 w-96 mx-auto">
      <label className="text-sm font-medium text-white-700 text-center">
        {'Personal Information'}
      </label>
      <p> Name: {data.name}</p>
      <p> Phone: {data.phone}</p>
      <p> Email: {data.email}</p>
      {/* Ensure the description grows vertically */}
      <p className="break-words"> Description: {data.description}</p>
      <p> Github: {data.github}</p>
      <p> Linkedin: {data.linkedin}</p>
    </div>
  );
}

export default AboutMeDisplay;
