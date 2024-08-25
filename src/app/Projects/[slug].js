import { useRouter } from "next/router";
import Image from "next/image";

const projects = [
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    description:
      "A comprehensive system designed to manage inventory seamlessly.",
    imageUrl: "/images/inventory-management-thumbnail.png",
    tags: ["React", "Next.js", "MongoDB"],
    details:
      "This is a detailed description of the inventory management system...",
  },
  {
    slug: "cybersecurity-lab",
    title: "Cybersecurity Home Lab",
    description:
      "A robust home lab setup for practicing cybersecurity techniques.",
    imageUrl: "/images/cybersecurity-lab-thumbnail.png",
    tags: ["Cybersecurity", "Networking", "Snort"],
    details: "This is a detailed description of the cybersecurity lab...",
  },
  // Add more projects as needed
];

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
}

export default function ProjectPage({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={1200}
        height={600}
        className="rounded-lg mb-4 object-cover"
      />
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
      <p className="text-lg">{project.details}</p>
    </div>
  );
}
