import { useRouter } from "next/router";

// Simulated data for demonstration purposes
const projectData = [
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    description:
      "A comprehensive system designed to manage inventory seamlessly.",
    imageUrl: "/images/inventory-management-full.png",
    tags: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
    details: `
      This project is a comprehensive system designed to manage inventory seamlessly. It includes features such as
      real-time inventory tracking, responsive design, and secure authentication. The project was deployed on AWS
      and has been instrumental in streamlining the inventory management process...
    `,
    technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Real-time inventory tracking",
      "Responsive design",
      "Secure authentication",
    ],
  },
  {
    slug: "cybersecurity-lab",
    title: "Cybersecurity Home Lab",
    description:
      "A robust home lab setup for practicing cybersecurity techniques.",
    imageUrl: "/images/cybersecurity-lab-full.png",
    tags: ["Cybersecurity", "Networking", "Snort", "Windows Server"],
    details: `
      This home lab was set up to practice and demonstrate various cybersecurity techniques. It includes tools like Snort
      for intrusion detection and Windows Server for Active Directory management. The lab setup also involves
      network monitoring and penetration testing...
    `,
    technologies: ["Snort", "Windows Server", "Networking"],
    features: [
      "Intrusion Detection",
      "Active Directory Management",
      "Penetration Testing",
    ],
  },
  // Add more projects as needed
];

// Function to fetch project data by slug
export async function getStaticProps({ params }) {
  const project = projectData.find((p) => p.slug === params.slug);

  return {
    props: {
      project,
    },
  };
}

// Function to specify the dynamic paths
export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function ProjectPage({ project }) {
  const router = useRouter();

  if (!router.isFallback && !project) {
    return <p>Project not found.</p>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto mb-8"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-gray-700 mb-8">{project.details}</p>

        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside mb-8">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc list-inside mb-8">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
