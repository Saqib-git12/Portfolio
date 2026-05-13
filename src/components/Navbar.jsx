// import "./Navbar.css"
// function Navbar(){
//     return(
//         <nav className="navbar">
//             <h2 className="logo">Saqib</h2>
//             <ul className="nav-links">
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Skills</li>
//                 <li>Project</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     )

// }
// export default Navbar

// //phase 2 using tailwind css 
// import { useState } from "react"

// import { FaBars, FaTimes } from "react-icons/fa"

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false)

//   return (

//     <nav className="bg-slate-900 text-white px-8 py-5 sticky top-0 z-50">

//       <div className="max-w-7xl mx-auto flex justify-between items-center">

//         <h1 className="text-3xl font-bold text-cyan-400">
//           Saqib
//         </h1>

//         <ul className="hidden md:flex gap-8 text-lg">
//           {/* <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             Home
//           </li>

//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             About
//           </li>

//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             Skills
//           </li>

//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             Projects
//           </li>

//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             Contact
//           </li> */}


//           {/* convert all li with anchor tags for smooth scrolling another phase */}
//         <a href="#home">
//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//           Home
//           </li>
//         </a>

//         <a href="#about">
//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             About
//           </li>
//         </a>
//         <a href="#skills">
//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             Skills
//           </li>
//         </a>
        
//       <a href="#projects">
//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             Projects
//           </li>
//         </a>
//         <a href="#contact">
//           <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
//             Contact
//           </li>
//         </a>


//         </ul>

//         <div
//           className="md:hidden text-2xl cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >

//           {
//             menuOpen ? <FaTimes /> : <FaBars />
//           }

//         </div>

//       </div>

//       {
//         menuOpen && (

//           <ul className="md:hidden flex flex-col gap-6 mt-6 text-center text-lg">
//             {/* <li>About</li>
//             <li>Skills</li>
//             <li>Projects</li>
//             <li>Contact</li> */}

//             {/* for mobile menu replace all li with anchor tags */}
//           <a href="#home">
//             <li>Home</li>
//           </a>
//           <a href="#about">
//             <li>About</li>
//           </a>
//           <a href="#skills">
//             <li>Skills</li>
//           </a>
//           <a href="#projects">
//             <li>Projects</li>
//           </a>
//           <a href="#contact">
//             <li>Contact</li>
//           </a>

//           </ul>

//         )
//       }

//     </nav>
//   )
// }

// export default Navbar


// phase3 dark light mode
import { useState } from "react"

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from "react-icons/fa"

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav
      className={
        darkMode
          ? "bg-slate-900 text-white px-8 py-5 sticky top-0 z-50"
          : "bg-gray-200 text-black px-8 py-5 sticky top-0 z-50"
      }
    >

      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
      "
      >

        <h1 className="text-3xl font-bold text-cyan-400">
          Saqib
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">

          <a href="#home">
            <li className="hover:text-cyan-400 transition duration-300">
              Home
            </li>
          </a>

          <a href="#about">
            <li className="hover:text-cyan-400 transition duration-300">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:text-cyan-400 transition duration-300">
              Skills
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-cyan-400 transition duration-300">
              Projects
            </li>
          </a>
          <a href="#contact">
            <li className="hover:text-cyan-400 transition duration-300">
              Contact
            </li>
          </a>

        </ul>

        <div className="flex items-center gap-6">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
            text-2xl
            text-cyan-400
          ">
          {darkMode? <FaSun />: <FaMoon />}

          </button>

        <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            { menuOpen ? <FaTimes /> : <FaBars /> } </div>

        </div>

      </div>

      {
        menuOpen && (

          <ul
            className="
            md:hidden
            flex
            flex-col
            gap-6
            mt-6
            text-center
            text-lg
          "
          >

            <a href="#home">
              <li>Home</li>
            </a>

            <a href="#about">
              <li>About</li>
            </a>

            <a href="#skills">
              <li>Skills</li>
            </a>

            <a href="#projects">
              <li>Projects</li>
            </a>
            
            <a href="#contact">
              <li>Contact</li>
            </a>

          </ul>

        )
      }

    </nav>
  )
}

export default Navbar