import { useState } from 'react';
import { Code, Server, Database, Wrench, Figma as FigmaIcon, Cloud } from 'lucide-react';

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code,
      color: 'from-blue-600 to-cyan-600',
      technologies: [
        { name: 'HTML5', description: 'Semantic markup and accessibility' },
        { name: 'CSS3 / SCSS', description: 'Modern styling and animations' },
        { name: 'JavaScript (ES6+)', description: 'Modern JavaScript features' },
        { name: 'TypeScript', description: 'Type-safe development' },
        { name: 'React', description: 'Component-based UI library' },
        { name: 'Next.js', description: 'React framework for production' },
        { name: 'Vue.js', description: 'Progressive JavaScript framework' },
        { name: 'Svelte', description: 'Compiler-based framework' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
        { name: 'Styled Components', description: 'CSS-in-JS styling' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Server,
      color: 'from-cyan-600 to-teal-600',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime environment' },
        { name: 'Express', description: 'Web application framework' },
        { name: 'Serverless Functions', description: 'Edge computing solutions' },
        { name: 'GraphQL', description: 'API query language' },
        { name: 'REST APIs', description: 'RESTful API design' },
        { name: 'WebSockets', description: 'Real-time communication' },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      icon: Database,
      color: 'from-teal-600 to-green-600',
      technologies: [
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'PostgreSQL', description: 'Relational database' },
        { name: 'Firebase', description: 'Backend-as-a-Service platform' },
        { name: 'Supabase', description: 'Open source Firebase alternative' },
        { name: 'Redis', description: 'In-memory data store' },
        { name: 'Prisma', description: 'Next-generation ORM' },
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Workflow',
      icon: Wrench,
      color: 'from-indigo-600 to-purple-600',
      technologies: [
        { name: 'Git / GitHub', description: 'Version control system' },
        { name: 'VS Code', description: 'Code editor' },
        { name: 'Webpack / Vite', description: 'Build tools' },
        { name: 'Jest', description: 'Testing framework' },
        { name: 'Cypress', description: 'End-to-end testing' },
        { name: 'ESLint / Prettier', description: 'Code quality tools' },
        { name: 'npm / yarn / pnpm', description: 'Package managers' },
      ]
    },
    {
      id: 'design',
      name: 'Design',
      icon: FigmaIcon,
      color: 'from-purple-600 to-rose-500',
      technologies: [
        { name: 'Figma', description: 'Interface design tool' },
        { name: 'Sketch', description: 'Digital design platform' },
        { name: 'Adobe XD', description: 'UX/UI design tool' },
        { name: 'Photoshop', description: 'Image editing software' },
        { name: 'Illustrator', description: 'Vector graphics editor' },
      ]
    },
    {
      id: 'deployment',
      name: 'Deployment & Cloud',
      icon: Cloud,
      color: 'from-blue-600 to-indigo-600',
      technologies: [
        { name: 'Vercel', description: 'Frontend deployment platform' },
        { name: 'Netlify', description: 'Web hosting platform' },
        { name: 'AWS', description: 'Cloud computing services' },
        { name: 'Docker', description: 'Containerization platform' },
        { name: 'GitHub Actions', description: 'CI/CD automation' },
      ]
    },
  ];

  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <Icon size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        {activeData && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeData.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-2 h-2 bg-gradient-to-r ${activeData.color} rounded-full mt-2 group-hover:scale-150 transition-transform`}></div>
                  <div className="flex-1">
                    <h4 className="mb-2">{tech.name}</h4>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Note */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl">Mobile-First & Accessible</h3>
            <p className="text-gray-600">
              All projects are built with a mobile-first approach, ensuring responsive design across all devices.
              I prioritize web accessibility (WCAG guidelines) to create inclusive experiences for all users.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">Responsive Design</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">WCAG Compliant</span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full">Performance Optimized</span>
              <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full">SEO Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}