export default function Skills() {
  const skills = [
    "JavaScript",
    "React Native",
    "Next.js",
    "React.js",
    "AWS EC2",
    "AWS DynamoDB",
    "AWS Amplify",
    "Networking",
    "Active Directory",
    "Snort",
    "Windows Server",
    "Splunk",
    "pfSense",
    "Cybersecurity",
    "UI/UX Design (Figma)",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
