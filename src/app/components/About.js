export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/profile-pic.png"
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-56 md:h-56 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Driven by a passion for cybersecurity and a commitment to
            excellence, I am on a journey to become a Cloud Security Engineer.
            My journey commenced over a year ago with a pivotal internship at
            MTN Telecommunications PLC, where I honed my skills in network
            monitoring, vulnerability assessment, and incident response, laying
            the groundwork for my commitment to cybersecurity.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In 2023, I transitioned to Software Engineering, spearheading a
            successful project—an inventory management web app for my parents
            company. This endeavor ignited my passion for web development,
            forming the bedrock of my software development skills, particularly
            with popular frameworks like React.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Expanding my horizons, I ventured into cloud technologies, hosting
            the web app on AWS and Google Firebase. Despite my diverse skill
            set, my heart remains in cybersecurity. With businesses increasingly
            migrating to the cloud, I am positioning myself to be an expert at
            the intersection of cloud and security.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            My professional journey reflects a fusion of hands-on cybersecurity
            experience and adept software development skills. As I actively seek
            opportunities, I am eager to contribute to meaningful projects and
            collaborate with exceptional individuals. I am excited to take on
            the challenges ahead and contribute to creating secure cloud
            solutions.
          </p>
          <a
            href="/resume.pdf"
            className="inline-block bg-teal-600 px-8 py-4 rounded-full text-white font-semibold transition-transform duration-300 hover:bg-teal-500 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
