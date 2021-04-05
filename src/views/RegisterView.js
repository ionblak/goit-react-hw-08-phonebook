import { useState } from 'react';

const RegisterViev = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterViev;
