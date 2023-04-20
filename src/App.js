import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderScreen from './screens/OrderScreen/OrderScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
    <div className='appContainer'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/order" element={<OrderScreen />} />
        </Routes>
      </BrowserRouter>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
