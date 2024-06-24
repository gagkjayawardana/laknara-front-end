import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Header from '../../Components/Header/Header';
import registerImage from '../../assests/registerImage1.jpeg';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Register_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Register_Container = styled.div`
  width: 100%;
  min-height: 600px;
  height: fit-content;
  background-image: url(${registerImage});
  background-size: 100% 100%;
  border-radius: 50px;
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
`;

const Register_Form = styled.div`
  width: 100%;
  min-height: 600px;
  height: fit-content;
  background-color: rgb(255, 255, 255, 0.9);
  border-radius: 50px;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
`;

const Register_Form_Content = styled.div`
  display: flex;
  padding-top: 40px;

  @media (max-width: 768px) {
    display: inherit;
  }
`;

const Register_Left_Content = styled.div`
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Register_Right_Content = styled.div`
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Register_Form_Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  medicalCenterName: Yup.string().required('Medical Center Name is required'),
  licenseNumber: Yup.string().required('Medical License Number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  role: Yup.string().required('Role is required')
});

function Register() {
  const navigate = useNavigate();
  const navigateToOnboard = () => {
    navigate('/');
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      medicalCenterName: '',
      licenseNumber: '',
      email: '',
      password: '',
      role: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Register_Page>
      <Header />
      <Register_Container>
        <form onSubmit={formik.handleSubmit}>
          <Register_Form>
            <Typography sx={{ textAlign: 'center' }} variant="h4" gutterBottom>
              Sign Up
            </Typography>
            <Register_Form_Content>
              <Register_Left_Content>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="filled"
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  id="medicalCenterName"
                  sx={{ marginTop: '40px' }}
                  name="medicalCenterName"
                  label="Name of the medical Center"
                  variant="filled"
                  fullWidth
                  value={formik.values.medicalCenterName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.medicalCenterName && Boolean(formik.errors.medicalCenterName)
                  }
                  helperText={formik.touched.medicalCenterName && formik.errors.medicalCenterName}
                />
                <TextField
                  id="licenseNumber"
                  sx={{ marginTop: '40px' }}
                  name="licenseNumber"
                  label="Medical License Number"
                  variant="filled"
                  fullWidth
                  value={formik.values.licenseNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.licenseNumber && Boolean(formik.errors.licenseNumber)}
                  helperText={formik.touched.licenseNumber && formik.errors.licenseNumber}
                />
              </Register_Left_Content>
              <Register_Right_Content>
                <FormControl
                  sx={{
                    '@media (max-width:768px)': {
                      marginTop: '40px'
                    }
                  }}
                  variant="filled"
                  fullWidth
                  error={formik.touched.role && Boolean(formik.errors.role)}>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    <MenuItem value={'Doctor'}>Doctor</MenuItem>
                    <MenuItem value={'Pharmacist'}>Pharmacist</MenuItem>
                  </Select>
                  {formik.touched.role && formik.errors.role ? (
                    <div
                      style={{
                        fontSize: '9pt',
                        color: '#cc0000',
                        marginLeft: '15px',
                        marginTop: '5px'
                      }}>
                      {formik.errors.role}
                    </div>
                  ) : null}
                </FormControl>
                <TextField
                  id="email"
                  sx={{ marginTop: '40px' }}
                  name="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  id="password"
                  sx={{ marginTop: '40px' }}
                  name="password"
                  label="Password"
                  variant="filled"
                  type="password"
                  fullWidth
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Register_Right_Content>
            </Register_Form_Content>
            <Register_Form_Buttons>
              <Button
                sx={{
                  width: '100px',
                  backgroundColor: '#000099',
                  '&:hover': { backgroundColor: '#0000ff' }
                }}
                variant="contained"
                type="submit">
                submit
              </Button>
              <Button sx={{ width: '100px' }} variant="outlined" onClick={navigateToOnboard}>
                back
              </Button>
            </Register_Form_Buttons>
          </Register_Form>
        </form>
      </Register_Container>
    </Register_Page>
  );
}

export default Register;
