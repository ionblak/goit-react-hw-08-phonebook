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
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChangeName} />
      <input type="email" value={email} onChange={handleChangeEmail} />
      <input type="password" value={password} onChange={handleChangePassword} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterViev;
