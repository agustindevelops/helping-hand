import { Project } from '@/data/PROJECT';

const ProjectCard: React.FC<Project> = ({ title, description, tags, icon, gradient }) => {
   return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div 
        className={`h-48 flex items-center justify-center bg-gradient-to-r ${gradient.from} ${gradient.to}`}
      >
        {icon && (
          <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d={icon}></path>
          </svg>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: string, index: number) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
