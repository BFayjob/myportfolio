export default function Blog() {
  const posts = [
    {
      title: "Understanding Cybersecurity in Web Development",
      excerpt:
        "Explore the key aspects of securing web applications and best practices in cybersecurity.",
      date: "August 20, 2024",
      link: "#",
    },
    {
      title: "UI/UX Design Trends for 2024",
      excerpt:
        "An overview of the latest trends in user interface and user experience design.",
      date: "July 15, 2024",
      link: "#",
    },
    {
      title: "Getting Started with Next.js for Frontend Development",
      excerpt:
        "A beginner-friendly guide to building web applications using Next.js.",
      date: "June 30, 2024",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-gray-100 shadow-lg rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-gray-500 mb-4 block">
                {post.date}
              </span>
              <a
                href={post.link}
                className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-400"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
