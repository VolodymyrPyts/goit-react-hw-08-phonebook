import { useDispatch } from "react-redux";
import { userLogin } from "redux/auth/operation";
import {Container, Form, Label, Input, Button } from "./LoginPage.styled";

const LoginPage = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(
      userLogin({
        email: email.value,
        password: password.value,
      })
    );
    e.currentTarget.reset();
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
        <Input type="email" name="email" required/>
        </Label>
        <Label>
          Password
        <Input type="password" name="password" required/>
        </Label>
        <Button type="submit">
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage;