import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                {post.frontmatter.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {post.frontmatter.description}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <a className="text-teal-500 hover:underline">Read More</a>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content", "posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
