import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { SiGnuprivacyguard } from 'react-icons/si';
import { FormWrapper, IconWrapper, IconText } from './RegisterForm.styled';

export const RegisterForm = () => {
  const hadnleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <FormWrapper>
      <Form onSubmit={hadnleSubmit}>
        <IconWrapper>
          <SiGnuprivacyguard size={35} />
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
