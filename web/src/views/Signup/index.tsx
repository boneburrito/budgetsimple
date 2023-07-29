import React, { useCallback, useEffect, useRef } from 'react';

import { requestGet, requestPut } from 'utils/request';

import './index.css';

const Signup = React.memo(() => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    requestGet('users/me/').then(([data]) => {
      console.log('Me sessions', data);
    }).catch((error) => {
      console.error('Me session error', error);
    });
  }, []);

  const handleSubmit = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      requestPut('users/register/', { email, password })
        .then(([data]) => {
          console.log('Signup complete', data);
          // Set session
        })
        .catch((error) => {
          console?.error('Error on signup', error);
        });
    }
  }, []);

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
