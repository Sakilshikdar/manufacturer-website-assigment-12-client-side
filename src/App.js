import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Share/Nabver/Header';
import Login from './components/Login/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div className='mx-6'>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<Register></Register>}></Route>
        
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
