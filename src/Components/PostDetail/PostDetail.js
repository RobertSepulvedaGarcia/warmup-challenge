import React, { useEffect, useState } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { getPostById } from "../../services/services";
import "./PostDetail.css";
const PostDetail = ({ idPost }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPostById(idPost);
        setState(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [idPost]);

  console.log(state);

  return (
    <div className="container-detail">
      <Jumbotron fluid className="element">
        <Container>
          <p className="display-3 text-center text-sm-left font-weight-bold">
            {state.title}
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="element">
        <Container>
          <p className="text-justify font-italic"> {state.body} </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default PostDetail;
