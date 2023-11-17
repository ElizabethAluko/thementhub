import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Ayobami Aluko',
    role: 'CEO',
    image: '/images/Ay.png',
  },
  {
    id: 2,
    name: 'Elizabeth Aluko',
    role: 'Designer',
    image: '/images/lizy.jpg',
  },
];

const Team = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Our Team</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
	      <div class="circular-image">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4"
              /></div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
