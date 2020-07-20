import React, { Component } from 'react';
import { Card, Container, Form, Col, Button } from 'react-bootstrap';
import '../css/ContactPage.css';

class ContactPage extends Component {
  constructor() {
    super();

    this.state = {
      displayErrors: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }

    this.setState({ displayErrors: false });
  }

  render() {
    return (
      <div id="Contact" className="contact-wrapper contact-background">
        <section className="contact-section">
          <Container>
            <div className="row d-flex justify-content-center">
              <Card className="card-box col-lg-10 col-centered">
                <Form id="aptForm" noValidate onSubmit={this.handleAdd}>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      controlId="formGridName"
                      className={`form-group ${
                        this.state.displayErrors ? 'was-validated' : ''
                      }`}
                    >
                      <Form.Label className="form-label">
                        Contact Name
                      </Form.Label>
                      <Form.Control
                        placeholder="Enter Name"
                        // value={this.state.companyName}
                        // onChange={this.handleChange}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please provide a valid name
                      </div>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      controlId="formGridEmail"
                      className={`form-group ${
                        this.state.displayErrors ? 'was-validated' : ''
                      }`}
                    >
                      <Form.Label className="form-label">
                        Contact Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        // value={this.state.companyName}
                        // onChange={this.handleChange}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please provide a valid email
                      </div>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group
                      as={Col}
                      controlId="formGridMessage"
                      className={`form-group ${
                        this.state.displayErrors ? 'was-validated' : ''
                      }`}
                    >
                      <Form.Label className="form-label">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Enter Message"
                        // value={this.state.companyName}
                        // onChange={this.handleChange}
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please provide a valid name
                      </div>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row className="justify-content-md-center">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form.Row>
                </Form>
              </Card>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
export default ContactPage;
