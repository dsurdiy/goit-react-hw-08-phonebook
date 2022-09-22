import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { FaUserLock } from 'react-icons/fa';
import { FormWrapper, IconWrapper, IconText } from './RegisterForm.styled';

export const RegisterForm = ({ onSubmit }) => {
  const hadnleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onSubmit({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <FormWrapper>
      <Form onSubmit={hadnleSubmit}>
        <IconWrapper>
          <FaUserLock size={35} />
          <IconText>Sign up</IconText>
        </IconWrapper>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
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
          Sign up
        </Button>
      </Form>
    </FormWrapper>
  );
};