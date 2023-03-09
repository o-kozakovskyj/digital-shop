import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import Grid from '@mui/material/Grid';
import {Done, LockOutlined} from '@mui/icons-material';
import { auth, googleProvider } from '../../../firebase/firebaseApp';
import { signInWithPopup, signInWithEmailLink, signOut } from 'firebase/auth';
import * as Styled from './LogIn.styled';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInIcon, setlogInIcon] = useState(<LockOutlined />);
  const [loginTitle, setLoginTitle] = useState('Log in');
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
      await signInWithEmailLink(auth, email, password);
      setIsLogIn(true);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
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
  const logOut = async () => {
    try {
      await signOut(auth);
      setIsLogIn(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (isLogIn) {
      setlogInIcon(<Done />)
      setLoginTitle('Logged in')
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
          Log In with Google
        </Styled.GoogleButton>
        <Styled.SubmitButton onClick={handleSubmit}>
          Log In
        </Styled.SubmitButton>
        <Styled.GoogleButton onClick={logOut}>
          Log out
        </Styled.GoogleButton>
        <Styled.AlreadyTitle>
          Don`t have an account ?
          <Link href={"/signup"} passHref legacyBehavior>
            <Styled.Anchor>
              Sign Up
            </Styled.Anchor>
          </Link>
        </Styled.AlreadyTitle>
         
      </Styled.Form>
    </Styled.SignInContainer>


  );
}
export default Signin;