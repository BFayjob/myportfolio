import React from "react";
import Link from "next/link";
import { getAllBlogPosts } from "../../lib/blog";

function Blog() {
  const posts = getAllBlogPosts();

  return (
    <section className="blog-section">
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>{" "}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blog;
