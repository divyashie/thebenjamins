import React, { Component } from 'react';
import FileUpload from "./FileUpload";
import "./file.css";
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class FileUploadPage extends Component {
    constructor(props) {
        super(props);
        this.state = { value: [], count: 1 }; //initial you'll have one form
    }

    addMore() {
        this.setState({ count: this.state.count + 1 }) //on click add more forms
    }

    displayForm() {
        let forms = [];
        for (let i = 0; i < this.state.count; i++) {
            let collegeNameID = "college-" + i + "-name";
            let collegeScholarshipID = "college-" + i + "-scholarship";
            let collegeLoansID = "college-" + i + "-loans";
            let collegeGrantsID = "college-" + i + "-grants";
            forms.push(
                <div key={i}>
                    <Form.Group value={this.state.value[i] || ''} controlId="form">
                        <Form.Label>College Name</Form.Label>
                        <Form.Control id={collegeNameID} type="name" placeholder="Enter college name" />
                        <Form.Label>Scholarships</Form.Label>
                        <Form.Control id={collegeScholarshipID} type="scholarship" placeholder="Enter scholarship money" />
                        <Form.Label>Loans</Form.Label>
                        <Form.Control id={collegeLoansID} type="loans" placeholder="Enter loan money" />
                        <Form.Label>Grants</Form.Label>
                        <Form.Control id={collegeGrantsID} type="grants" placeholder="Enter grant money" />
                    </Form.Group>
                </div>
            )
        }
        return forms || null;
    }

    render() {
        return (
            <div>
                <form >
                    <input type='button' className="add-btn" value='+' onClick={this.addMore.bind(this)} />
                    {this.displayForm()}
                </form>
                <Link className="link" to="/analysis">
                <button>Analyze</button>
                </Link>
            </div>
        );
    }
}

export default FileUploadPage;