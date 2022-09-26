import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Wraper } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../features/hooks/redux";
import { login, signup } from "../../redux/reducers/userSlice";
import Loading from "../../components/loading/Loading";
type FormLogin = {
  emailLogin: string;
  passWordLogin: string;
};
type FormSignUp = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};
const Login: React.FC = () => {
  const [check, setCheck] = React.useState<boolean>(false);
  const {signUpsucces, isLoading} = useAppSelector((state)=> state.auth)
  const schemaLogin = yup.object().shape({
    emailLogin: yup
      .string()
      .required("Please fill your email")
      .email("Invalid email"),
    passWordLogin: yup.string().required("Please fill your password"),
  });
  const schemaSignup = yup.object().shape({
    name: yup.string().required("Please fill your name"),
    email: yup
      .string()
      .required("Please fill your email")
      .email("Invalid email"),
    phone: yup.string().required("Please fill your phone"),
    password: yup
      .string()
      .required("Please fill your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must have one uppercase letter, one lowercase letter and one special character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .test("matchPassword", "Not match", (val) => val == watchPassword),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaLogin),
  });
  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    watch: watchSignUp,
    formState: { errors: errorSignUp },
  } = useForm<FormSignUp>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaSignup),
  });
  const dispatch = useAppDispatch();
  const onSubmitLogin = (data: Object) => {
    dispatch(login(data));
  };
  const onSubmitSignUp = (data: object) => {
    dispatch(signup(data));
  };
  var watchPassword: string = watchSignUp("password");
  return (
    <Wraper>
      <div className="card-3d-wrap mx-auto">
        <div className={`card-3d-wrapper ${check && "isRotage"}`}>
          <Form className="form-login" onSubmit={handleSubmit(onSubmitLogin)}>
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
              onClick={() => setCheck(!check)}
            >
              You don't have account?
            </span>
          </Form>

          <Form
            className="form-signup"
            onSubmit={handleSubmitSignUp(onSubmitSignUp)}
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
              onClick={() => setCheck(!check)}
            >
              You have account yet
            </span>
          </Form>
        </div>
      </div>
    </Wraper>
  );
};
export default Login;
