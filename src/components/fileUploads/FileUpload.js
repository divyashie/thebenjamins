import React, { Component } from "react";
import "./file.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FileUpload extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="form">
            <Form.Label>College Name</Form.Label>
            <Form.Control type="name" placeholder="Enter college money" />
            <Form.Label>Scholarships</Form.Label>
            <Form.Control type="scholarship" placeholder="Enter scholarship money" />
            <Form.Label>Loans</Form.Label>
            <Form.Control type="loans" placeholder="Enter loan money" />
            <Form.Label>Grants</Form.Label>
            <Form.Control type="grants" placeholder="Enter grant money" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FileUpload;
