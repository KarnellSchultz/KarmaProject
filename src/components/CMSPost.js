import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CMS_POST = gql`
  {
    posts {
      id
      title
    }
  }
`;

// client
//   .query({
//     query: gql`
//       {
//         posts {
//           id
//           title
//         }
//       }
//     `
//   })
//   .then(result => console.log(result.data));

export default function CMSPost() {
  const { loading, error, data } = useQuery(CMS_POST);

  if (loading) return <p>loading</p>;
  if (error) return <p>Error</p>;

  if (data) {
    const { posts } = data;
    console.log({ posts });
    return posts.map(post => <h1>{post.title}</h1>);
  }
}
