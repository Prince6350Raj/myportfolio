export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Application",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and checkout functionality. Built with modern web technologies for optimal performance.",
      technologies: ["Python", "React JS", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: "CRUD Operations System",
      description: "A comprehensive Create, Read, Update, Delete application demonstrating database management and RESTful API implementation with clean architecture.",
      technologies: ["Python", "Database", "API"],
      color: "from-purple-500 to-pink-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      ),
    },
    {
      title: "Password Generator App",
      description: "A secure password generation tool with customizable options for length, complexity, and character types. Ensures strong password creation for enhanced security.",
      technologies: ["Python", "Security", "Automation"],
      color: "from-orange-500 to-red-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      ),
    },
    {
      title: "Automation Tools",
      description: "Various Python automation scripts for task scheduling, data processing, and workflow optimization. Improved efficiency and reduced manual work.",
      technologies: ["Python", "Automation", "Scripting"],
      color: "from-green-500 to-teal-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      ),
    },
    {
      title: "Web Development Projects",
      description: "Multiple responsive web applications showcasing modern UI/UX design principles, interactive features, and seamless user experiences.",
      technologies: ["HTML", "CSS", "JavaScript", "React JS"],
      color: "from-indigo-500 to-purple-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      ),
    },
    {
      title: "DSA Problem Solutions",
      description: "Collection of Data Structures and Algorithms implementations in C++, covering various problem-solving techniques and optimization strategies.",
      technologies: ["C++", "DSA", "Problem Solving"],
      color: "from-pink-500 to-rose-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      ),
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of diverse projects demonstrating technical expertise and problem-solving abilities
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 card-hover group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {project.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
