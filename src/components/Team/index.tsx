import TeamMemberCard from '@/components/Team/Member/Card';
import TEAM from '@/data/TEAM';
import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Humans Behind the Machines</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We're a small, agile team of AI developers, systems architects, and designers with one goal: build tools that solve real problems.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;