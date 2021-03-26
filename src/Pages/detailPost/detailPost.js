import React from "react";
import Layout from "../../Components/Layout/Layout";
import PostDetail from "../../Components/PostDetail/PostDetail";
const detailPost = () => {
  const id = window.location.search.slice(4);

  return (
    <Layout>
      <PostDetail idPost={id} />
    </Layout>
  );
};

export default detailPost;
