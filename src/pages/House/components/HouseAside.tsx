import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import styles from "../../../styles/components/House/_HouseAside.module.scss";

export const HouseAside = () => {
  return (
    <aside className={styles["home-aside"]}>
    <Card>
      <Card.Header  className={styles["aside-card-header"]}>
        <div>
          Contact Agent
        </div>
      </Card.Header>
      <Card.Body  className="aside-card-body">
      <Form>
      <Form.Group className="mb-3 labelForm" controlId="formBasicEmail">
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3 labelForm" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" id="phone" placeholder="Your phone number" />
          </Form.Group>
          <Form.Group className="mb-3 w-100">            
            <textarea className="form-control" placeholder="YourComments...">
            </textarea>
          </Form.Group>
          <Form.Group className="mb-3">
            <a
              href="tour"
              className="btn-flip"
              data-back="Submit"
              data-front="Submit"
            ></a>
          </Form.Group>
        </Form>
      </Card.Body>   
     
    </Card>

    </aside>
  );
};
