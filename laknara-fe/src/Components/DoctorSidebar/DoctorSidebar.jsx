import React, { useState } from 'react';
import styled from 'styled-components';
import HealthCareLogo from '../Logo/HealthcareLogo';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

const Doctor_Sidebar = styled.div`
  width: 250px;
  min-height: 100vh;
  height: fit-content;
  background-color: #d5ebff;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Doctor_Sidebar_Hr = styled.hr`
  color: #d9d9d9;
`;

const Doctor_Sidebar_Options = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const Doctor_Sidebar_Buttons = styled.div`
  width: 230px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    button {
      margin-top: 15px;
    }
  }
`;

const Doctor_Sidebar_Mobile_Menu_Button = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000; /* Ensure the button is above other content */
  }
`;

const Doctor_Sidebar_Drawer_Content = styled.div`
  width: 250px;
  background-color: #d5ebff;
  padding: 20px;
  height: 100%;
`;

const Doctor_Sidebar_Close_Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function DoctorSidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const sidebarContent = () => {
    return (
      <>
        <HealthCareLogo />
        <Doctor_Sidebar_Hr />
        <Doctor_Sidebar_Options>
          <Doctor_Sidebar_Buttons>
            <Button
              sx={{
                width: '100%',
                color: '#000000',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                '&:hover': { backgroundColor: '#ccd9ff' }
              }}
              variant="contained"
              size="large">
              admin
            </Button>
            <Button
              sx={{
                width: '100%',
                color: '#000000',
                backgroundColor: '#ffffff',
                marginTop: '30px',
                borderRadius: '10px',
                '&:hover': { backgroundColor: '#ccd9ff' }
              }}
              variant="contained"
              size="large">
              patients
            </Button>
            <Button
              sx={{
                width: '100%',
                color: '#000000',
                backgroundColor: '#ffffff',
                marginTop: '30px',
                borderRadius: '10px',
                '&:hover': { backgroundColor: '#ccd9ff' }
              }}
              variant="contained"
              size="large">
              prescription
            </Button>
            <Button
              sx={{
                width: '100%',
                color: '#000000',
                backgroundColor: '#ffffff',
                marginTop: '30px',
                borderRadius: '10px',
                '&:hover': { backgroundColor: '#ccd9ff' }
              }}
              variant="contained"
              size="large">
              patient reports
            </Button>
          </Doctor_Sidebar_Buttons>
        </Doctor_Sidebar_Options>
      </>
    );
  };

  return (
    <>
      <Doctor_Sidebar_Mobile_Menu_Button>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Doctor_Sidebar_Mobile_Menu_Button>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}>
        <Doctor_Sidebar_Drawer_Content>
          <Doctor_Sidebar_Close_Button>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Doctor_Sidebar_Close_Button>
          {sidebarContent()}
        </Doctor_Sidebar_Drawer_Content>
      </Drawer>
      <Doctor_Sidebar>{sidebarContent()}</Doctor_Sidebar>
    </>
  );
}

export default DoctorSidebar;
