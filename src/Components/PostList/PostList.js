import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./PostList.css";
const PostList = () => {
  const { Item } = ListGroup;

  return (
    <ListGroup>
      <Item>
        <div className="list-container">
          <div className="element-1">
            <h1>Esto es un post</h1>
          </div>
          <div className="element-2">
            <Button variant="primary" size="lg">
              Edit
              <span>
                <AiFillEdit />
              </span>
            </Button>
          </div>
          <div className="element-3">
            <Button variant="danger" size="lg">
              Delete
              <span>
                <AiFillDelete />
              </span>
            </Button>
          </div>
        </div>
      </Item>
    </ListGroup>
  );
};

export default PostList;
