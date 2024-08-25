import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/posts";
import DOMPurify from "dompurify"; // Assuming you install DOMPurify

export default function BlogPostPage({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
      <span className="text-sm text-gray-500 mb-8 block">{post?.date}</span>
      <p className="text-gray-600 mb-4">{post?.description}</p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post?.content) }}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const post = await getPostBySlug(slug);

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}
