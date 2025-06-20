import React, { useState, useEffect } from 'react'
import './App.css'
import Action from './components/Action'
import ActionAddMoment from './components/ActionAddMoment'
import ActionViewMoment from './components/ActionViewMoment'
import Admin from './components/Admin'
import CreateNewTimeline from './components/CreateNewTimeline'
import Home from './components/Home'
import Explore from './components/Explore'
import Login from './components/Login'
import Signup from './components/Signup'
import Timeline from './components/Timeline'
import Footer from './shared/Footer'
import Header from './shared/Header'
import Contact from './components/Contact'
import { Routes, Route } from "react-router-dom";





function App() {

  const [user,setUser] = useState(localStorage.getItem("user") || {});

  return(
    <>
        <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path ="/login" element={<Login user={user} setUser={setUser} />}/>
          <Route path ="/timeline" element={<Timeline />}/>
          <Route path ="/action" element={<Action />}/>
          <Route path ="/actionaddmoment" element={<ActionAddMoment />}/>
          <Route path ="/actionviewmoment" element={<ActionViewMoment />}/>
          <Route path ="/createnewtimeline" element={<CreateNewTimeline />}/>
          <Route path ="/explore" element={<Explore />}/>
          <Route path ="/register" element={<Signup user={user} setUser={setUser} />}/>
          {/* <Route path ="/signup" element={<Signup user={user} setUser={setUser} />}/> */}
          <Route path ="/admin" element={<Admin />}/>
          <Route path ="/contact" element={<Contact />}/>



        </Routes>
        <Footer/>
    

    </>
  )

  
}

export default App



// template code
// const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )