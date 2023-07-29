import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { requestPost, setToken } from 'utils/request';

import './index.css';

const Login = React.memo(() => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, []);

  const handleSubmit = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      requestPost('api-token-auth/', { username: email, password })
        .then(([data]) => {
          if (data?.type === 'object' && data?.value['token']) {
            const token = data.value['token'];

            if (typeof token === 'string') {
              setToken(token);
              navigate('/');
            }
          }
        })
        .catch((error) => {
          console?.error('Error on login', error);
        });
    }
  }, [navigate]);

  return (
    <div className="login">
      <div className="login-card -inset --all --lg">
        <h1 className="h1">Log in</h1>

        <form className="-offset --lg">
          <div className="field">
            <label className="label">Email address</label>
            <div className="controls">
              <input type="text" className="input" ref={emailRef} />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="controls">
              <input type="password" className="input" ref={passwordRef} />
            </div>
          </div>

          <div className="field">
            <button className="button --primary" onClick={handleSubmit} type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Login;
