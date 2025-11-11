export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Corizo",
      location: "Gurugram (Udyog Vihar)",
      period: "June 2025 - August 2025",
      description: "Worked on full-stack web development projects, implementing modern web technologies and best practices. Collaborated with the team to deliver high-quality web applications.",
      skills: ["React JS", "JavaScript", "Web Development", "Team Collaboration"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      role: "Python Development Intern",
      company: "Geeta Technical Hub",
      location: "Geeta University",
      period: "June 2024 - August 2024",
      description: "Developed Python applications including e-commerce systems, CRUD operations, and automation tools. Gained hands-on experience in backend development and problem-solving.",
      skills: ["Python", "Backend Development", "Automation", "Problem Solving"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional internship experiences that shaped my development journey
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-indigo-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-gray-500 text-sm mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
