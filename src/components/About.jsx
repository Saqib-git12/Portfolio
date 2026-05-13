// import "./About.css"
// function About(){
//     return (
//         <section>
//             <h2> About Me</h2>
//             <p>I am a passionate MERN Stack developer with knowledge of React.js, Node.js,
//                  Express.js and MongoDB.</p>
//                  <p> I recently completed Full Stack Web Development
//         training and currently building real-world projects</p>
//         </section>
//     )
// }
// export default About

//phase 2

// import { motion } from "framer-motion"

// function About() {

//   return (

//     <section
//       id="about"
//       className="
//       min-h-screen
//       flex
//       items-center
//       justify-center
//       px-6
//       bg-slate-900
//       text-white
//     "
//     >

//       <motion.div
//         className="max-w-5xl"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >

//         <h2
//           className="
//           text-4xl
//           md:text-6xl
//           font-bold
//           text-cyan-400
//           mb-10
//         "
//         >
//           About Me
//         </h2>

//         <p
//           className="
//           text-lg
//           md:text-xl
//           text-slate-300
//           leading-relaxed
//           mb-6
//         "
//         >
//           I am a passionate MERN Stack Developer
//           focused on building modern, scalable
//           and responsive web applications.
//         </p>

//         <p
//           className="
//           text-lg
//           md:text-xl
//           text-slate-400
//           leading-relaxed
//         "
//         >
//           I recently completed Full Stack Web
//           Development training and currently
//           building real-world projects using
//           React.js, Node.js, Express.js
//           and MongoDB.
//         </p>

//       </motion.div>

//     </section>
//   )
// }

// export default About

// phase3 darkmode

import { motion } from "framer-motion"

function About({ darkMode }) {

  return (
    <section id="about"
      className={darkMode ? `min-h-screen flex items-center justify-center
            px-6 bg-slate-900 text-white`: `min-h-screen flex items-center
            justify-center px-6 bg-gray-100 text-black `}>

      <motion.div

        className="max-w-5xl"

        initial={{ opacity: 0, y: 100 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}
      >

        <h2
          className="text-4xl md:text-6xl font-bold text-cyan-400 mb-10" >
          About Me
        </h2>

        <p
          className={darkMode ? `text-lg md:text-xl text-slate-300 
            leading-relaxed mb-6`: `text-lg md:text-xl text-gray-700
             leading-relaxed mb-6` }>

          I am an enthusiastic developer currently building my expertise in Full Stack Development. 
          I have a strong foundation in web technologies and a passion for creating interactive and 
          meaningful projects while continuously learning and growing in the tech field.
        </p>

        <p
          className={darkMode ? ` text-lg md:text-xl text-slate-400
            leading-relaxed` : `text-lg md:text-xl text-gray-600 leading-relaxed `
          }>

          My expertise includes frontend and backend development using modern web technologies. 
          I am committed to writing clean and efficient code, learning new technologies, and contributing
          to impactful projects in a professional and collaborative environment.

        </p>

      </motion.div>

    </section>
  )
}

export default About