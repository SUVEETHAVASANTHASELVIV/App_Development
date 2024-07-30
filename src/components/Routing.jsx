import React from 'react'
import {Route, Routes} from 'react-router-dom'
import SignUp from './SignUp'
// import Homepage from './Homepage'
import Loginform from './Loginpage'
import ForgotPassword from './Forgetpw'
import Dashboard from './Admin/Dashboard'
import Orders from './Admin/Ordermanagement'
// import Navbar from './Admin/Navbar'
// import Sidebar from './Admin/sidebar'

const Routing = () => {
  return (
      // <Navbar/>
      // <Sidebar/>
    <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Loginform/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Forgotpw' element={<ForgotPassword/>}/>
        <Route path='/Order' element={<Orders/>}/>
    </Routes>
  )
}
export default Routing