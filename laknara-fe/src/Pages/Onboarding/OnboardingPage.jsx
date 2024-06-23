import React from 'react';
import Header from '../../Components/Header/Header';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import onboardingImage from '../../assests/onboardingImage1.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Onboarding_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Onboarding_Body = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
`;

const Onboarding_Phase1 = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const Onboading_Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: fit-content;
  display: flex;

  @media (max-width: 768px) {
    display: inherit;
  }
`;

const Onboading_Image = styled.img`
  width: 50%;
  height: 540px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    eight: 500px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Onboading_Login_Form = styled.div`
  width: 50%;
  min-height: 500px;
  height: fit-content;
  background-color: #1a75ff;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Onboarding_Phase2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Login_Form = styled.div`
  width: 100%;
  min-height: 500px;
  height: fit-content;
  border: 3px solid white;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
`;

const Log_Err_Msg = styled.span`
  color: #800000;
`;

const Navigate_Register = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

function OnboadingPage() {
  const phase1 = `"The guardianship of your lives`;
  const phase2 = `falls within our care"`;

  const LoginForm = () => {
    const loginFormPhase = `Don't you have an account?`;
    const initialValues = {
      email: '',
      password: ''
    };
    const validationSchema = yup.object().shape({
      email: yup.string().email('Invalid email address').required('Email is required'),
      password: yup.string().required('Required')
    });
    const onSubmit = (data) => {
      const email = data.email;
      const password = data.password;

      console.log('user', email, password);
    };
    return (
      <Login_Form>
        <Typography sx={{ textAlign: 'center', color: '#ffffff' }} variant="h6" gutterBottom>
          Log In
        </Typography>
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
              <Field
                as={TextField}
                name="email"
                sx={{ marginTop: '40px' }}
                label="Email"
                variant="filled"
                fullWidth
                helperText={
                  <ErrorMessage name="email" render={(msg) => <Log_Err_Msg>{msg}</Log_Err_Msg>} />
                }
              />
              <Field
                as={TextField}
                name="password"
                sx={{ marginTop: '40px' }}
                label="Password"
                variant="filled"
                type="password"
                fullWidth
                helperText={
                  <ErrorMessage
                    name="password"
                    render={(msg) => <Log_Err_Msg>{msg}</Log_Err_Msg>}
                  />
                }
              />
              <Button
                sx={{
                  marginTop: '45px',
                  backgroundColor: '#000099',
                  '&:hover': { backgroundColor: '#0000ff' }
                }}
                variant="contained"
                type="submit"
                fullWidth>
                login
              </Button>
            </Form>
          </Formik>
          <Navigate_Register>
            <Typography sx={{ color: '#ffffff', marginTop: '20px' }} variant="body2" gutterBottom>
              {loginFormPhase}
            </Typography>
            <Button
              sx={{
                color: '#000099',
                textTransform: 'none',
                marginLeft: '5px',
                marginTop: '11px',
                '&:hover': { color: '#0000ff' }
              }}
              variant="text">
              Register Now
            </Button>
          </Navigate_Register>
        </>
      </Login_Form>
    );
  };
  return (
    <Onboarding_Page>
      <Header />
      <Onboarding_Body>
        <Onboarding_Phase1>
          <Typography variant="body2" gutterBottom>
            {phase1}
          </Typography>
          <Typography sx={{ color: '#0000ff', marginLeft: '5px' }} variant="body2" gutterBottom>
            {phase2}
          </Typography>
        </Onboarding_Phase1>
        <Onboading_Container>
          <Onboading_Image src={onboardingImage} />
          <Onboading_Login_Form>{LoginForm()}</Onboading_Login_Form>
        </Onboading_Container>
        <Onboarding_Phase2>
          <Typography variant="body2" gutterBottom>
            Briding Patients, Doctors,
          </Typography>
          <Typography sx={{ color: '#0000ff', marginLeft: '5px' }} variant="body2" gutterBottom>
            and Pharmacies Online
          </Typography>
        </Onboarding_Phase2>
      </Onboarding_Body>
    </Onboarding_Page>
  );
}

export default OnboadingPage;
