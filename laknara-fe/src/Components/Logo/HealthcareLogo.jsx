import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const Logo_Title = styled.div`
  display: flex;
`;

function HealthCareLogo() {
  return (
    <>
      <Logo_Title>
        <Typography variant="h5" gutterBottom>
          Health
        </Typography>
        <Typography sx={{ color: '#0000ff' }} variant="h5" gutterBottom>
          Care
        </Typography>
      </Logo_Title>
      <Typography sx={{ marginTop: '-12px' }} variant="subtitle2" gutterBottom>
        Your Health, Our Priority
      </Typography>
    </>
  );
}

export default HealthCareLogo;
