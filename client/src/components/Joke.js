import React from "react";
import Modal from "react-bootstrap/Modal";

const Joke = ({ joke, onHideModal, modal }) => {
  return (
    <>
      <Modal show={modal} onHide={onHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Joke</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{joke ? joke : <p>Loading...</p>}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={onHideModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Joke;
