import React from "react";
import { useForm } from "react-hook-form";
import { Wraper } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../features/hooks/redux";
import { login, signup } from "../../redux/reducers/userSlice";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
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
  const { signUpsucces, isLoading } = useAppSelector((state) => state.auth)
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
          <LoginForm register={register} handleSubmit={handleSubmit(onSubmitLogin)} errors={errors} onCheck={() => setCheck(!check)} />
          <SignUpForm registerSignUp={registerSignUp} handleSubmit={handleSubmit(onSubmitSignUp)} errorSignUp={errorSignUp} onCheck={() => setCheck(!check)} />
        </div>
      </div>
    </Wraper>
  );
};
export default Login;


