import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Pierpaolo.css';
import './MainStyle.css';
import './InfoComponent.css';
import './Marco.css';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;