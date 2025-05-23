import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Homepage from '../Components/Home'
import LogMusic from '../Components/LogMusic'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Dashboard from '../Components/Dashboard'
import ProtectedRoute from '../Components/ProtectedRoute'
import AddMood from '../Components/AddMood'
import LikdePlaylist from '../Components/LikdePlaylist'

function App() {


  return (
    <Router>
      <Routes>
   <Route path='/' element={<Login/>}/>
   <Route path='/home' element={<ProtectedRoute>
    <Homepage/> 
    </ProtectedRoute>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/logmusic' element={
    <ProtectedRoute><LogMusic/></ProtectedRoute> 
    }/>
   <Route path='/register' element={<Register/>}/>
      <Route path='/customMood' element={
      <ProtectedRoute>
       <AddMood/>
      </ProtectedRoute>
 
        }/>
   <Route path='/dashboard' element={
   <ProtectedRoute>
     <Dashboard/>
   </ProtectedRoute>
   
  }
    />
      <Route path='/likedPlaylist' element={
        <LikdePlaylist/>}/>
      </Routes>
    </Router>
  )
}

export default App
