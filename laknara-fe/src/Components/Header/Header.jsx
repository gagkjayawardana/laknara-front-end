import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Header_Container = styled.div`
  width: 100%;
  min-height: 100px;
  height: fix-content;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding-top: 40px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

const Header_Title_with_Logo = styled.div`
  width: 65%;
`;

const Header_Title = styled.div`
  display: flex;
`;

const Header_Bottons = styled.div`
  width: 35%;
  display: flex;
  justify-content: right;
  padding-right: 50px;

  @media (max-width: 600px) {
    padding-right: 0;
  }
`;

const Button_Line = styled.div`
  border-left: 1px solid black;
  height: 50px;
`;

function Header() {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate('/register');
  };
  const navigateToOnboard = () => {
    navigate('/');
  };
  return (
    <Header_Container>
      <Header_Title_with_Logo>
        <Header_Title>
          <Typography variant="h5" gutterBottom>
            Health
          </Typography>
          <Typography sx={{ color: '#0000ff' }} variant="h5" gutterBottom>
            Care
          </Typography>
        </Header_Title>
        <Typography sx={{ marginTop: '-12px' }} variant="subtitle2" gutterBottom>
          Your Health,Our Priority
        </Typography>
      </Header_Title_with_Logo>
      <Header_Bottons>
        <Button
          sx={{
            color: '#000000',
            textTransform: 'none',
            marginRight: '30px',
            '&:hover': { color: '#0000ff' },
            '@media (max-width:600px)': {
              marginRight: '10px'
            }
          }}
          onClick={navigateToOnboard}
          variant="text">
          Log In
        </Button>
        <Button_Line />
        <Button
          sx={{
            color: '#000000',
            textTransform: 'none',
            marginLeft: '20px',
            '&:hover': { color: '#0000ff' }
          }}
          onClick={navigateToRegister}
          variant="text">
          Register
        </Button>
      </Header_Bottons>
    </Header_Container>
  );
}

export default Header;
