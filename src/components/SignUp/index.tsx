import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { LockOutlined, Done } from '@mui/icons-material';
import { auth, googleProvider } from '../../../firebase/firebaseApp';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as Styled from './SignUp.styled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInIcon, setlogInIcon] = useState(<LockOutlined />);
  const [loginTitle, setLoginTitle] = useState('Sign up');
  const [isLogIn, setIsLogIn] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setIsLogIn(true)
    } catch (error) {
      alert(error);
    }
  };
  const googleSubmit = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLogIn(true);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (isLogIn) {
      setlogInIcon(<Done />)
      setLoginTitle('Signed in')
    }
  }, [isLogIn])

  return (
    <Styled.SignInContainer>
      <Avatar>
        {logInIcon}
      </Avatar>
      <Styled.Title>
        {loginTitle}
      </Styled.Title>
      <Styled.Form >
        <Styled.EmailInput onChange={handleChange} value={email} />
        <Styled.Passwordnput onChange={handleChange} value={password} />
        <Styled.RememberBox />
        <Styled.GoogleButton onClick={googleSubmit}>
          Sign Up with Google
        </Styled.GoogleButton>
        <Styled.SubmitButton onClick={handleSubmit}>
          Sign Up
        </Styled.SubmitButton>
        <Styled.AlreadyTitle>
          Already have an account ?
          <Link
            href={"/login"}
            passHref
            legacyBehavior
          >
            <Styled.Anchor>
              Login
            </Styled.Anchor>
          </Link>
        </Styled.AlreadyTitle>
      </Styled.Form>
    </Styled.SignInContainer>
  );
}
export default SignUp;