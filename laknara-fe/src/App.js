// import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnboadingPage from './Pages/Onboarding/OnboardingPage';

function App() {
  return (
    <div className="App">
      <>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnboadingPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
