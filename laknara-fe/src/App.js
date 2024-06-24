// import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnboadingPage from './Pages/Onboarding/OnboardingPage';
import Register from './Pages/Register/RegisterPage';

function App() {
  return (
    <div className="App">
      <>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnboadingPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
