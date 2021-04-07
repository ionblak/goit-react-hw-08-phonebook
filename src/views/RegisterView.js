import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

const RegisterViev = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const resetForm = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={handleChangeEmail} />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterViev;
