import Link from "next/link";
import Image from "next/image";

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
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <span className="text-teal-500 hover:underline">
                    View Project
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
