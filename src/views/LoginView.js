import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

const LoginViev = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default LoginViev;
