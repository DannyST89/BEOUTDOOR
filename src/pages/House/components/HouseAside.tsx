import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import styles from "../../../styles/components/House/_HouseAside.module.scss";

export const HouseAside = () => {


  return (
    <aside className={`${styles["home-aside"]}  wow animate__animated animate__fadeIn`}>
      <Card>
        <Card.Header className={`${styles["aside-card-header"]} wow animate__animated animate__fadeInRight`}>
          <div>
            Contact Agent
          </div>
        </Card.Header>
        <Card.Body className="aside-card-body wow animate__animated animate__fadeInRight">
          <Form>
            <Form.Group className="mb-3 labelForm" controlId="fullName">
              <Form.Label>Your Full Name</Form.Label>
              <Form.Control type="text" placeholder="Your Full Name" />
              {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3 labelForm" controlId="email">
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
                className={`btn-flip ${styles["botonHouseForm"]}`}
                data-back="Submit"
                data-front="Submit"
                title="send form"
              ></a>
            </Form.Group>
          </Form>
        </Card.Body>

      </Card>

    </aside>
  );
};
