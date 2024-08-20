import Link from "next/link";

const projects = [
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    description:
      "A comprehensive system designed to manage inventory seamlessly.",
    imageUrl: "/images/inventory-management-thumbnail.png",
    tags: ["React", "Next.js", "MongoDB"],
  },
  {
    slug: "cybersecurity-lab",
    title: "Cybersecurity Home Lab",
    description:
      "A robust home lab setup for practicing cybersecurity techniques.",
    imageUrl: "/images/cybersecurity-lab-thumbnail.png",
    tags: ["Cybersecurity", "Networking", "Snort"],
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-400"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
