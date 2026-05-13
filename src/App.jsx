// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import About from "./components/About"
// import Skills from "./components/Skills"
// import Projects from "./components/Projects"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
// function App(){
//   return(
//        <div>
//         <Navbar/>
//         <Hero/>
//         <About/>
//         <Skills/>
//         <Projects/>
//         <Contact/>
//         <Footer/>
//        </div>
//   )
// }
// export default App



//Tailwind test
// function App() {
  //   return (
    //     <div className="bg-black h-screen flex justify-center items-center">
    
    //       <h1 className="text-5xl text-cyan-400 font-bold">
    //         Tailwind CSS Working
    //       </h1>
    
    //     </div>
    //   )
    // }
    
    // export default App
    
    
    //2phase code 
//   import Navbar from "./components/Navbar";
//   import Hero from "./components/Hero";
//   import About from "./components/About";
//   import Skills from "./components/Skills";
//   import Projects from "./components/Projects";
//     function App(){
//   return(
//     <div className="bg-slate-950 min-h-screen text-white">
//       <Navbar/>
//       <Hero/>
//       <About/>
//       <Skills/>
//       <Projects/>
//     </div>
//   )
// }
// export default App

//phase 3 code dark light mode
import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (

    <div
      className={
        darkMode? "bg-slate-950 text-white" : "bg-white text-black"} >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}/>

      <Hero darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Skills darkMode={darkMode} />

      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />

    </div>
  )
}

export default App