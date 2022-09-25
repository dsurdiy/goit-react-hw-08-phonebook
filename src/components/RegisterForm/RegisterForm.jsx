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
      <form onSubmit={hadnleSubmit}>
        <IconWrapper>
          <FaUserLock size={35} />
          <IconText>Sign up</IconText>
        </IconWrapper>

        <label>
          Name
          <input type="text" name="name" placeholder="Enter name" />
        </label>
        <label>
          Email address
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Sign up</button>
      </form>
    </FormWrapper>
  );
};
