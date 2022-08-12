import { Card, Input } from "reactstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../../styles/components/contactUs/_Formulario.scss";

export const HomeAside = () => {
  return (
    <aside className="home-aside">
      <Form>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <a
            href="tour"
            className="btn-flip"
            data-back="Submit"
            data-front="Submit"
          ></a>
        </Form.Group>
      </Form>
    </aside>
  );
};
