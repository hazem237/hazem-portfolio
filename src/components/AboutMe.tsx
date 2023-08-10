import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-500 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Basic Info Section */}
        <div className="text-white">
          <h2 className="text-3xl font-semibold mb-4">Hi, I'm [Your Name]</h2>
          <p className="text-lg leading-relaxed">
            [A catchy and brief introduction about yourself. Tell your passion, skills, and what you love to do.]
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="text-lg font-semibold">[Your University/College Name]</h4>
            <p className="text-gray-600 text-sm">[Your Degree], [Year of Graduation]</p>
            <p className="mt-2 text-gray-700">
              [Add some details about your educational background, achievements, and any relevant projects or coursework.]
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="text-lg font-semibold">[Your Job Title], [Company/Organization]</h4>
            <p className="text-gray-600 text-sm">[Start Date] - [End Date]</p>
            <p className="mt-2 text-gray-700">
              [Describe your roles, responsibilities, and achievements during your experience at this position.]
            </p>
          </div>
          {/* Add more experience entries if needed */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
