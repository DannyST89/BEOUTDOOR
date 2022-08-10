import { Form, Input } from "reactstrap";
import "../../../styles/components/contactUs/_Formulario.scss";

export const HomeAside = () => {
  return (
    <aside className="home-aside">
      <form action="">
        <div>
          <p className="textForm">Leave your message here</p>
        </div>
        <div>
          <Input
            className="inputForm"
            rows={6}
            placeholder="Your Name"
            id="name"
            name="name"
            type="text"
          />
          <Input
            className="inputForm"
            rows={6}
            placeholder="Your Email"
            id="name"
            name="name"
            type="text"
          />
          <Input
            className="inputForm"
            rows={6}
            placeholder="Your Phone Number"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div>
          <a
            href="tour"
            className="btn-flip"
            data-back="Have Fun"
            data-front="se more..."
          ></a>
        </div>
      </form>
    </aside>
  );
};
