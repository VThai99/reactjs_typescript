import React from "react";
import { Button, Form } from "react-bootstrap";
type propsType = {
    register: any,
    handleSubmit: () => void,
    errors: any,
    onCheck: () => void
}
const LoginForm: React.FC<propsType> = (props) => {
    const { register, handleSubmit, errors, onCheck } = props
    return (<Form className="form-login" onSubmit={handleSubmit}>
        <p className="mb-5 text-center form-login__nameForm">Login</p>
        <Form.Group className="mb-3">
            <Form.Label className="form-login__tittle">
                Email address
            </Form.Label>
            <Form.Control
                {...register("emailLogin")}
                placeholder="Enter email"
                className="form-login__info"
            />
            {errors.emailLogin && (
                <Form.Text className="text-danger">
                    {errors.emailLogin.message}
                </Form.Text>
            )}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label className="form-login__tittle">Password</Form.Label>
            <Form.Control
                type="password"
                {...register("passWordLogin")}
                placeholder="Password"
                className="form-login__info"
            />
            {errors.passWordLogin && (
                <Form.Text className="text-danger">
                    {errors.passWordLogin.message}
                </Form.Text>
            )}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Save my info" />
        </Form.Group>
        <Button className="form-login__button" type="submit">
            Login
        </Button>
        <span
            className="form-login__ques mt-3"
            onClick={onCheck}
        >
            You don't have account?
        </span>
    </Form>)
}

export default LoginForm