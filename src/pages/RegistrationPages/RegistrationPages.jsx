import { useDispatch } from "react-redux";
import { userRegister } from "redux/auth/operation";
import { Button, Container, Form, Input, Label } from "./RegisterPage.styled"

const RegisterPage = () => {

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      userRegister({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  }
   
  return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>
            Name
            <Input type="input" name="name" required />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" required />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" required />
          </Label>
          <Button type="submit">
            Register
          </Button>
        </Form>
      </Container>
    )
  }

export default RegisterPage;