import Link from "next/link";

export default function BlogPage({ posts = [] }) {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? ( // Check if posts is not empty
          posts.map((post, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{post?.title}</h3>
              <p className="text-gray-600 mb-4">{post?.excerpt}</p>
              <span className="text-sm text-gray-500 mb-4 block">
                {post?.date}

                <Link href={`/blog/${post?.slug}`}>
                  <a className="bg-teal-500 text-blue-800 px-4 py-2 rounded-full hover:bg-teal-400">
                    Read More
                  </a>
                </Link>
              </span>
            </div>
          ))
        ) : (
          <p className="text-blue-950 text-lg">No blog posts available yet.</p>
        )}
      </div>
    </div>
  );
}
