import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Register from './components/Login/Register/Register';
import Home from './components/Share/Home/Home';
import Purchase from './components/Products/purchase';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Dashboard/Orders';
import Header from './components/Share/Header/Header';
import AddReview from './components/Dashboard/AddReview';
import Users from './components/Dashboard/Users';
import RequireAdmin from './components/Login/RequireAuth/RequireAdmin';
import Blogs from './components/Blogs/Blogs';
import MyProfile from './components/Dashboard/MyProfile';
import AddProduct from './components/Dashboard/AddProduct';
import Portfolio from './components/Portfolio/Portfolio';
import Payment from "././components/Dashboard/Payment";
import ManageProduct from './components/Dashboard/ManageProduct';

function App() {
  return (
    <div className='mx-6'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/profile' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<Orders></Orders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='product' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageproducts' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>

        </Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
