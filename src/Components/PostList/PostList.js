import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import usePostFetch from "../../Hooks/usePostsFetch";
import { url } from "../../Utils/endpoint";
import "./PostList.css";

const PostList = () => {
  const { Body, Footer, Title } = Card;
  const { data } = usePostFetch(url);

  return (
    <div className="container-posts">
      {data.map((post) => {
        return (
          <div key={post.id} className="element">
            <Card
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Body>
                <Title>
                  <h1>{post.title}</h1>
                </Title>
                <Link to={`/details?id=${post.id}`}>
                  <Button variant="success">Go post</Button>
                </Link>
              </Body>
              <Footer>
                <div className="actions">
                  <div className="action">
                    <Button
                      style={{ width: "100%" }}
                      variant="primary"
                      size="lg"
                    >
                      Edit
                      <span>
                        <AiFillEdit />
                      </span>
                    </Button>
                  </div>
                  <div className="action">
                    <Button
                      style={{ width: "100%" }}
                      variant="danger"
                      size="lg"
                    >
                      Delete
                      <span>
                        <AiFillDelete />
                      </span>
                    </Button>
                  </div>
                </div>
              </Footer>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
