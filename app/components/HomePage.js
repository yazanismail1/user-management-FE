"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function HomePage() {
  return (
    <>
      <Container>
        <section className="lg:text-center md:text-center sm:text-justify">
          <h1 id="home" className="text-3xl py-4 font-semibold ">
            Country Details
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section className="lg:text-center md:text-center sm:text-justify">
          <h1 id="about" className="text-3xl py-4 font-semibold ">
            About Us
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section className="lg:text-center md:text-center sm:text-justify">
          <h1 id="services" className="text-3xl py-4 font-semibold">
            Services
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section className="lg:text-center md:text-center sm:text-justify">
          <h1 id="services" className="text-3xl py-4 font-semibold ">
            Contact Us
          </h1>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" className="rounded" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Subject" className="mb-3">
              <Form.Control type="text" placeholder="Subject"  className="rounded border-black" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
              <Form.Control className="border-black" as="Textarea" placeholder="Message" style={{ height: '200px' }} />
            </FloatingLabel>

            <Button variant="dark" size="lg" type="submit" className="w-full mb-3">
              Submit
            </Button>
          </Form>
        </section>
      </Container>
    </>
  );
}
