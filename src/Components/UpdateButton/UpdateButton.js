import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import ModalUpdate from "../ModalUpdate/ModalUpdate";

const UpdateButton = ({ id }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{ width: "100%" }}
        variant="primary"
        size="md"
      >
        Edit
        <span>
          <AiFillEdit />
        </span>
      </Button>
      <ModalUpdate idPost={id} showing={show} hiding={handleClose} />
    </>
  );
};

export default UpdateButton;
