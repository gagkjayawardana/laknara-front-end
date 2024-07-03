// import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnboadingPage from './Pages/Onboarding/OnboardingPage';
import Register from './Pages/Register/RegisterPage';
import RegistrationSuccess from './Pages/RegistrationSuccess/RegistrationSuccessPage';
import DoctorHomePage from './Pages/Doctor/DoctorHome/DoctorHomePage';

function App() {
  return (
    <div className="App">
      <>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnboadingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
            <Route path="/doctorHome" element={<DoctorHomePage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
