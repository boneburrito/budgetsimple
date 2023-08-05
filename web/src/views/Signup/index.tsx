import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { requestPost } from 'utils/request';

import { Block, Button, Field, Form, H1, Input, Label } from 'components/ui';

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
      <Block className="signup-card" inset insetSize="lg">
        <H1>Sign up</H1>

        <Form offset offsetSize="lg">
          <Field>
            <Label>Email address</Label>
            <div className="controls">
              <Input type="text" ref={emailRef} />
            </div>
          </Field>

          <Field>
            <Label>Password</Label>
            <div className="controls">
              <Input type="password" ref={passwordRef} />
            </div>
          </Field>

          <Field>
            <Button className="button --primary" onClick={handleSubmit} type="button">Submit</Button>
          </Field>
        </Form>
      </Block>
    </div>
  );
});

export default Signup;
