import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { auth, googleProvider } from '../../../firebase/firebaseApp';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import * as Styled from './SignIn.styled';
import { useEffect } from 'react';


const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
    } catch (error) {
      console.error(error);
    }
  };
  const  googleSubmit = async() => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Styled.SignInContainer>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Styled.Title>
        Sign in
      </Styled.Title>
      <Styled.Form >
        <Styled.EmailInput onChange={handleChange } value={email} />
        <Styled.Passwordnput onChange={handleChange} value={password} />
        <Styled.RememberBox />
        <Styled.GoogleButton onClick={googleSubmit}>
          Sign In with Google
        </Styled.GoogleButton>
        <Styled.SubmitButton onClick={handleSubmit}>
          Sign In
        </Styled.SubmitButton>
        <Styled.GoogleButton onClick={logOut}>
          Sign out
        </Styled.GoogleButton>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={5}>
            <Link href="#" color={"#000"}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs={7}>
            <Link href="#" color={"#000"}>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Styled.Form>
    </Styled.SignInContainer>


  );
}
export default Signin;