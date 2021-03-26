import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { url } from "../../Utils/endpoint";
import usePostsFetch from "../../Hooks/usePostsFetch";
import "./PostDetail.css";
const PostDetail = ({ idPost }) => {
  const urlWithId = `${url}/${idPost}`;
  const { data } = usePostsFetch(urlWithId);

  console.log(data);

  return (
    <div className="container-detail">
      <Jumbotron fluid className="element">
        <Container>
          <p className="display-3 text-center text-sm-left font-weight-bold">
            {data.title}
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="element">
        <Container>
          <p className="text-justify font-italic">{data.body}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default PostDetail;
