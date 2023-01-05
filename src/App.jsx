import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './app.css';

export default function App() {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}
