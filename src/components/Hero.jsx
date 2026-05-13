// import "./Hero.css"
// function Hero(){
//     return(
//         <section className="hero">
//             <div className="hero-content">
//             <h1>HI i am saqib Ashraf Bhat </h1>
//             <h2>Full stack web Developer</h2>
//             <p>I build responsive and modern web applications using MERN stack</p>
//             <button>Download Resume</button>
//             </div>
//         </section>
//     )
// }
// export default Hero


// 2phase code
// import saqibpic from "../assets/saqibpic.jpeg"
// import { motion } from "framer-motion"

// import { Typewriter } from "react-simple-typewriter"

// import {
//     FaGithub,
//     FaLinkedin,
//     FaDownload
// } from "react-icons/fa"

// function Hero({darkMode}) {

//     return (
// //give id to section for smooth scrolling to that particular id
//     <section id="home"
//         className="min-h-screen flex items-center justify-center px-6 bg-slate-950 text-white">
//         <div
//             className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }} >
                
//                 <p className="text-cyan-400 text-xl mb-4"> Hello, My Name Is </p>
//                 <h1 className=" text-5xl md:text-7xl font-bold leading-tight mb-6 ">
//                     Saqib Ashraf Bhat </h1>
//                 <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6 ">
//                     <Typewriter
//                         words={[
//                             "MERN Stack Developer",
//                             "Frontend Developer",
//                             "React Developer",
//                             "Full Stack Developer" ]}
//                             loop={true}
//                             cursor
//                             cursorStyle="|"
//                             typeSpeed={70}
//                             deleteSpeed={50}
//                             delaySpeed={1500} />

//                 </h2>
//                 <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
//                     I build responsive, scalable and modern
//                     web applications using React.js,
//                     Node.js, Express.js and MongoDB.
//                 </p>
//                 <div className="flex flex-wrap gap-6">
//                     <button className=" flex items-center gap-3 bg-cyan-400 text-black
//                     px-6 py-3 rounded-xl font-semibold hover:scale-105 transition 
//                     duration-300 ">
//                     <FaDownload /> 
//                     Resume  </button>
//                     <a href="https://github.com/" target="_blank" className="text-3xl
//                     hover:text-cyan-400 transition duration-300 " >
//                     <FaGithub />
//                     </a>
//                     <a href="https://linkedin.com/" target="_blank" className="
//                     text-3xl hover:text-cyan-400 transition duration-300 " >
//                     <FaLinkedin />
//                     </a>

//                 </div>

//             </motion.div>

//             <motion.div className="flex justify-center"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}>
//                 {/* <img src="../assets/saqibpic.jpeg" */}
//                 <img src={saqibpic}
//                 alt="profile" className="w-[350px] h-[350px] md:w-[450px] md:h-[450px]
//                 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"/>

//             </motion.div>

//         </div>

//     </section>
//     )
// }

// export default Hero


// phase 3 darkmode
import saqibpic from "../assets/saqibpic.jpeg"
import { motion } from "framer-motion"

import { Typewriter } from "react-simple-typewriter"

import {
  FaGithub,
  FaLinkedin,
  FaDownload
} from "react-icons/fa"



function Hero({ darkMode }) {

  return (

    <section

      id="home"

      className={
        darkMode

          ? `
            min-h-screen
            flex
            items-center
            justify-center
            px-6
            bg-slate-950
            text-white
          `

          : `
            min-h-screen
            flex
            items-center
            justify-center
            px-6
            bg-gray-100
            text-black
          `
      }
    >

      <div
        className="
        max-w-7xl
        w-full
        grid
        md:grid-cols-2
        gap-16
        items-center
      "
      >

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-xl mb-4">
            Hello, My Name Is
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            mb-6
          "
          >
            Saqib Ashraf Bhat
          </h1>

          <h2
            className={
              darkMode

                ? `
                  text-2xl
                  md:text-4xl
                  font-semibold
                  text-slate-300
                  mb-6
                `

                : `
                  text-2xl
                  md:text-4xl
                  font-semibold
                  text-gray-700
                  mb-6
                `
            }
          >

            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "React Developer",
                "Full Stack Developer"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </h2>

          <p
            className={
              darkMode

                ? `
                  text-slate-400
                  text-lg
                  leading-relaxed
                  max-w-xl
                  mb-8
                `

                : `
                  text-gray-600
                  text-lg
                  leading-relaxed
                  max-w-xl
                  mb-8
                `
            }
          >

            I build responsive, scalable and modern
            web applications using React.js,
            Node.js, Express.js and MongoDB.

          </p>

          <div className="flex flex-wrap gap-6">

            {/* <button
              className="
              flex
              items-center
              gap-3
              bg-cyan-400
              text-black
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              duration-300
            "
            >

              <FaDownload />

              Resume

            </button> */}
            <a href="/saqibpf.pdf" target="_blank" download className="flex
            items-center gap-3 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold
            hover:scale-105 transition duration-300">

            <FaDownload /> 

  Download Resume

</a>

            <a
              href="https://github.com/Saqibgit-12"
              target="_blank"

              className="
              text-3xl
              hover:text-cyan-400
              transition
              duration-300
            "
            >

              <FaGithub />

            </a>

            <a
              href="https://linkedin.com/in/saqib-ashraf-bhat-0a27752a7"
              target="_blank"

              className="
              text-3xl
              hover:text-cyan-400
              transition
              duration-300
            "
            >

              <FaLinkedin />

            </a>

          </div>

        </motion.div>

        <motion.div
          className="flex justify-center"

          initial={{ opacity: 0, x: 100 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}
        >

          <img
            src={saqibpic}

            alt="profile"

            className="
            w-[350px]
            h-[350px]
            md:w-[450px]
            md:h-[450px]
            rounded-full
            object-cover
            object-top
            border-4
            border-cyan-400
            shadow-2xl
          "
          />

        </motion.div>

      </div>

    </section>
  )
}

export default Hero