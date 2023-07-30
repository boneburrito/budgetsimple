import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { requestGet, requestPost, setToken } from 'utils/request';

import './index.css';

const Signup = React.memo(() => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      requestPost('users/register/', { username: email, email, password })
        .then(([data]) => {
          if (data?.type === 'object' && typeof data?.value['id'] === 'string') {
            navigate('/login');
          }
        })
        .catch((error) => {
          console?.error('Error on signup', error);
        });
    }
  }, [navigate]);

  return (
    <div className="signup">
      <div className="signup-card -inset --all --lg">
        <h1 className="h1">Sign up</h1>

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

export default Signup;
