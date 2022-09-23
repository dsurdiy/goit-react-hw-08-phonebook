import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { BiLogIn } from 'react-icons/bi';
import { FormWrapper, IconWrapper, IconText } from './LoginForm.styled';

export const LoginForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onSubmit({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <IconWrapper>
          <BiLogIn size={35} />
          <IconText>Log in</IconText>
        </IconWrapper>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Log in
        </Button>
      </Form>
    </FormWrapper>
  );
};
