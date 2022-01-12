import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './views/Home';
import Shop from './views/Shop';
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react';


const App= () => {
   const[students,setStudents]=useState(['Cristiano Ronaldo','Raheem Sterling','Karim Benzema','Mohamed Salah','Luka Modrik']);


  return (
    <div className="App">
       <Navbar/>
       
       <Routes>
         <Route children path='/' element={<Home students={students} setStudents={setStudents}/>}/>
         <Route children path='/shop' element={<Shop/>}/>
       </Routes>

      
    </div>
  );
}

export default App;
