export default function Post({ postData }) {
  return <div>{postData.attributes.content}</div>;
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts(filters: { publishedAt: { notNull: true } }) {
          data {
            attributes {
              slug
            }
          }
        }
      }
    `,
  });
  return {
    paths: data.posts.data.map((item) => ({
      params: { slug: item.attributes.slug },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts(
          sort: "publishedAt:desc"
          pagination: { limit: 1 }
          filters: { slug: { eq: "${params.slug}" } }
        ) {
          data {
            attributes {
              title
              slug
              content
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              author {
                data {
                  attributes {
                    username
                  }
                }
              }
              tags {
                data {
                  attributes {
                    tagId
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      postData: data.posts.data[0],
    },
  };
}
