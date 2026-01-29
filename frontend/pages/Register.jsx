import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', form);
      alert(res.data.msg);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} />
      <input name="email" placeholder="Correo" type="email" onChange={handleChange} />
      <input name="password" placeholder="Contraseña" type="password" onChange={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  );
}
