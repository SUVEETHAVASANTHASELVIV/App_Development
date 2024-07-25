import React from 'react'
import {Route, Routes} from 'react-router-dom'
import SignUp from './SignUp'
import Homepage from './Homepage'
import Loginform from './Loginpage'

const Routing = () => {
  return (
    <Routes>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/' element={<Loginform/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Forgotpw' element={<SignUp/>}/>
    </Routes>
  )
}

export default Routing