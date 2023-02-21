import React from "react";
import { Button, Form } from "react-bootstrap";
import Loading from "../../components/loading/Loading";
type propsType = {
    registerSignUp: any,
    handleSubmit: () => void,
    errorSignUp: any,
    onCheck: () => void
}
const SignUpForm: React.FC<propsType> = (props) => {
    const { registerSignUp, handleSubmit, errorSignUp, onCheck } = props
    return (<Form
        className="form-signup"
        onSubmit={handleSubmit}
    >
        <p className="mb-5 text-center form-signup__nameForm">SignUp</p>
        <Form.Group className="mb-3">
            <Form.Label className="form-signup__tittle">Name</Form.Label>
            <Form.Control
                type="text"
                {...registerSignUp("name")}
                placeholder="Your Name"
                className="form-signup__info"
            />
            {errorSignUp.name && (
                <Form.Text className="text-danger">
                    {errorSignUp.name.message}
                </Form.Text>
            )}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label className="form-signup__tittle">
                Email address
            </Form.Label>
            <Form.Control
                type="email"
                {...registerSignUp("email")}
                placeholder="Enter email"
                className="form-signup__info"
            />
            {errorSignUp.email && (
                <Form.Text className="text-danger">
                    {errorSignUp.email.message}
                </Form.Text>
            )}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label className="form-signup__tittle">Phone</Form.Label>
            <Form.Control
                type="phone"
                {...registerSignUp("phone")}
                placeholder="Phone Number"
                className="form-signup__info"
            />
            {errorSignUp.phone && (
                <Form.Text className="text-danger">
                    {errorSignUp.phone.message}
                </Form.Text>
            )}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label className="form-signup__tittle">Password</Form.Label>
            <Form.Control
                type="password"
                {...registerSignUp("password")}
                placeholder="Password"
                className="form-signup__info"
            />
            {errorSignUp.password && (
                <Form.Text className="text-danger">
                    {errorSignUp.password.message}
                </Form.Text>
            )}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label className="form-signup__tittle">
                Confirm Password
            </Form.Label>
            <Form.Control
                type="password"
                {...registerSignUp("confirmPassword")}
                placeholder="Confirm Password"
                className="form-login__info"
            />
            {errorSignUp.confirmPassword && (
                <Form.Text className="text-danger">
                    {errorSignUp.confirmPassword.message}
                </Form.Text>
            )}
        </Form.Group>
        <Button
            variant="dark__yellow"
            className="form-signup__button h__80"
            type="submit"
        >
            <Loading size={40} />
        </Button>
        <span
            className="form-signup__ques mt-3"
            onClick={onCheck}
        >
            You have account yet
        </span>
    </Form>)
}
export default SignUpForm