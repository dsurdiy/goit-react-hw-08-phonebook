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
      <form onSubmit={handleSubmit}>
        <IconWrapper>
          <BiLogIn size={35} />
          <IconText>Log in</IconText>
        </IconWrapper>

        <label>
          Email address
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>

        <button type="submit">Log in</button>
      </form>
    </FormWrapper>
  );
};
