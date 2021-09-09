import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { toggle } from '../../../store/userAction';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });
  const auth = useAuth();

  const handleOnchange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setForm({ ...form, [name]: value });
  }
  const handleSubmit = (e) => {
    e && e.preventDefault();
    auth.login(form.email, form.password).then(e => {
      // console.log(e);
      dispatch(toggle('Login'));
    });
  }
  return (
    <div className="page-login">
      <form className="login-form">
        <h3 className="title text-center">Login Form</h3>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input type="email" name="email" className="form-control" id="inputEmail" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input type="password" name="password" className="form-control" id="inputPassword" onChange={handleOnchange} />
        </div>
        <button className="btn btn-primary" onClick={(e) => {
          handleSubmit(e);
        }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
