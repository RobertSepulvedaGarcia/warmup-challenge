import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import UpdateButton from "../UpdateButton/UpdateButton";
import { getPosts, deletePost } from "../../services/services";
import Swal from "sweetalert2";
import "./PostList.css";

const PostList = () => {
  const { Body, Footer, Title } = Card;
  const [state, setState] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPosts();
        setState(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const erasePost = async (postId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be reverted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yeah!, Destroy it!",
        cancelButtonText: "No way!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const data = await deletePost(postId, state);
            console.log(data);
            setState(data);
          } catch (error) {
            console.error(error);
          }
          Swal.fire("Done!", "The post was deleted.", "success");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-posts">
      {state.map((post) => {
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
                  <h1> {post.title} </h1>
                </Title>
              </Body>
              <Footer>
                <div className="actions">
                  <div className="action">
                    <Link to={`/details?id=${post.id}`}>
                      <Button
                        style={{ width: "100%" }}
                        variant="success"
                        size="md"
                      >
                        Read it!
                      </Button>
                    </Link>
                  </div>
                  <div className="action">
                    <UpdateButton id={post.id} />
                  </div>
                  <div className="action">
                    <Button
                      onClick={() => erasePost(post.id)}
                      style={{ width: "100%" }}
                      variant="danger"
                      size="md"
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
