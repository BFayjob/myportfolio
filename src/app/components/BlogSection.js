import Link from "next/link";

export default function BlogSection({ posts = [] }) {
  console.log(posts);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">
          Blog
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 bg-gray-100 shadow-lg rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-sm text-gray-500 mb-4 block">
                  {post.date}
                </span>
                <Link href={`/blog/${post.slug}`}>
                  <a className="bg-teal-500 text-blue-800 px-4 py-2 rounded-full hover:bg-teal-400">
                    Read More
                  </a>
                </Link>
              </div>
            ))
          ) : (
            <p>No blog posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
