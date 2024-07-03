import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header/Header';
import registrationSuccess from '../../assests/registrationSuccessImage.jpg';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';

const Registration_Success_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Registration_Success_Container = styled.div`
  width: 75%;
  height: 500px;
  background-image: url(${registrationSuccess});
  background-size: 100% 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  padding-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding-top: 90px;
  }
`;

const Registration_Success_Content = styled.div`
  width: 400px;
  min-height: 400px;
  height: fit-content;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 40px;
  padding-bottom: 20px;

  @media (max-width: 600px) {
    width: 300px;
    min-height: 300px;
  }
`;

const Registration_Success_Phase1 = styled.div`
  display: flex;
  justify-content: center;
`;

function RegistrationSuccess() {
  return (
    <Registration_Success_Page>
      <Header />
      <Registration_Success_Container>
        <Registration_Success_Content>
          <Registration_Success_Phase1>
            <Typography variant="h6" gutterBottom>
              Welcome to health
            </Typography>
            <Typography sx={{ color: '#0000ff' }} variant="h6" gutterBottom>
              Care
            </Typography>
          </Registration_Success_Phase1>
          <Typography sx={{ textAlign: 'center' }} variant="subtitle2" gutterBottom>
            Your Health, Our Priority
          </Typography>
          <CheckCircleIcon
            sx={{
              width: '100px',
              height: '100px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20px'
            }}
          />
          <Typography
            sx={{ textAlign: 'center', marginTop: '20px' }}
            variant="subtitle1"
            gutterBottom>
            <b>RegistrationSuccessful!</b>
          </Typography>
          <Button
            sx={{
              width: '100px',
              backgroundColor: '#000099',
              textTransform: 'none',
              marginTop: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              '&:hover': { backgroundColor: '#0000ff' }
            }}
            variant="contained">
            Continue
          </Button>
        </Registration_Success_Content>
      </Registration_Success_Container>
    </Registration_Success_Page>
  );
}

export default RegistrationSuccess;
