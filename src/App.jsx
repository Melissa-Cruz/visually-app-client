import { useState } from 'react'

import './App.css'
import Action from './components/Action'
import ActionAddMoment from './components/ActionAddMoment'
import ActionViewMoment from './components/ActionViewMoment'
// import Admin from './components/Admin'
import CreateNewTimeline from './components/CreateNewTimeline'
import Home from './components/Home'
import Explore from './components/Explore'
import Login from './components/Login'
// import Signup from './components/Signup'
import Timeline from './components/Timeline'
import Footer from './shared/Footer'
import Header from './shared/Header'
import { Routes, Route } from "react-router-dom";





function App() {
  return(
    <>
        <Header/>
        <Routes>

          <Route path ="/" element={<Home />}/>
          <Route path ="/" element={<Login />}/>
          <Route path ="/" element={<Timeline />}/>
          <Route path ="/" element={<Action />}/>
          <Route path ="/" element={<ActionAddMoment />}/>
          <Route path ="/" element={<ActionViewMoment />}/>
          <Route path ="/" element={<CreateNewTimeline />}/>
          <Route path ="/" element={<Explore />}/>
          {/* <Route path ="/" element={<Signup />}/> */}
          {/* <Route path ="/" element={<Admin />}/> */}


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