import React from "react";
import { Button, Form } from "react-bootstrap";
import { Wraper } from "./styles";
const Login: React.FC = () => {
  const [check, setCheck] = React.useState<boolean>(false);
  return (
    <Wraper>
      <div className="card-3d-wrap mx-auto">
        <div className={`card-3d-wrapper ${check && "isRotage"}`}>
          <Form className="form-login">
            <p className="mb-5 text-center form-login__nameForm">Login</p>
            <Form.Group className="mb-3">
              <Form.Label className="form-login__tittle">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-login__info"
              />
              {/* <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-login__tittle">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-login__info"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Save my info" />
            </Form.Group>
            <Button className="form-login__button">Login</Button>
            <span className="form-login__ques mt-3" onClick={() => setCheck(!check)}>You don't have account?</span>
          </Form>

          <Form className="form-signup">
            <p className="mb-5 text-center form-signup__nameForm">SignUp</p>
            <Form.Group className="mb-3">
              <Form.Label className="form-signup__tittle">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                className="form-signup__info"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-signup__tittle">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-signup__info"
              />
              {/* <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-signup__tittle">Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Phone Number"
                className="form-signup__info"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-signup__tittle">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-signup__info"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-signup__tittle">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="form-login__info"
              />
            </Form.Group>
            <Button variant="dark__yellow" className="form-signup__button">Register</Button>
            <span className="form-signup__ques mt-3" onClick={() => setCheck(!check)}>You have account yet</span>
          </Form>
        </div>
      </div>
    </Wraper>
  );
};
export default Login;
