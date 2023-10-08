import './App.css'
import { BrowserRouter, Router, Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Register from './components/Register';

function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/registration' element={<Register />}/>
                    <Route path='/wallet' element={<Wallet />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

