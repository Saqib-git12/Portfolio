// import "./Skills.css"
// function Skills(){
//     return(
//         <section >
//             <h2>Skills</h2>
//             <ul className="skills-list">
//                 <li>Html</li>
//                 <li>Css</li>
//                 <li>Javascript</li>
//                 <li>React.js</li>
//                 <li>Node.js</li>
//                 <li>Express.js</li>
//                 <li>MongoDB</li>
//                 <li>Git and GitHub</li>

//             </ul>
//         </section>
//     )
// }
// export default Skills

//phase 2code
// import { motion } from "framer-motion"

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub
// } from "react-icons/fa"

// import {
//   SiMongodb,
//   SiExpress,
//   SiTailwindcss
// } from "react-icons/si"

// function Skills() {

//     const skills = [
//         {
//             name: "HTML",
//             icon: <FaHtml5 />,
//             color: "text-orange-500"
//         },

//         {
//             name: "CSS",
//             icon: <FaCss3Alt />,
//             color: "text-blue-500"
//         },

//         {
//             name: "JavaScript",
//             icon: <FaJs />,
//             color: "text-yellow-400"
//         },

//         {
//             name: "React",
//             icon: <FaReact />,
//             color: "text-cyan-400"
//         },

//         {
//             name: "Node.js",
//             icon: <FaNodeJs />,
//             color: "text-green-500"
//         },

//         {
//             name: "Express.js",
//             icon: <SiExpress />,
//             color: "text-gray-300"
//         },

//         {
//             name: "MongoDB",
//             icon: <SiMongodb />,
//             color: "text-green-400"
//         },

//         {
//             name: "Tailwind CSS",
//             icon: <SiTailwindcss />,
//             color: "text-cyan-300"
//         },

//         {
//             name: "Git",
//             icon: <FaGitAlt />,
//             color: "text-orange-400"
//         },

//         {
//             name: "GitHub",
//             icon: <FaGithub />,
//             color: "text-white"
//         }
//     ]

//     return (  
//         <section id="skills" className="min-h-screen bg-slate-950 text-white px-6 py-24">
//             <motion.div className="max-w-7xl mx-auto"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1 }} >
                
//                 <h2 className="text-4xl md:text-6xl font-bold text-center text-cyan-400 mb-20">
//                     Skills
//                 </h2>

//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//                     {
//                         skills.map((skill, index) => (

//                             <motion.div
//                                 key={index}
//                                 className=" bg-slate-900 rounded-2xl p-8 flexflex-col
//                 items-center
//                 justify-center
//                 gap-4
//                 shadow-lg
//                 hover:scale-105
//                 transition
//                 duration-300
//                 cursor-pointer
//               "
//                                 initial={{ opacity: 0, y: 50 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >

//                                 <div
//                                     className={`text-6xl ${skill.color} `} >
//                                     {skill.icon}
//                                 </div>

//                                 <h3 className="text-xl font-semibold">
//                                     {skill.name}
//                                 </h3>

//                             </motion.div>

//                         ))
//                     }

//                 </div>

//             </motion.div>

//         </section>
//     )
// }

// export default Skills


// phase 3 darkcode

import { motion } from "framer-motion"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa"

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss
} from "react-icons/si"

function Skills({ darkMode }) {

  const skills = [

    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "text-orange-500"
    },

    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "text-blue-500"
    },

    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400"
    },

    {
      name: "React",
      icon: <FaReact />,
      color: "text-cyan-400"
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-500"
    },

    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-400"
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-400"
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "text-cyan-300"
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-orange-400"
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-white"
    }

  ]

  return (

    <section

      id="skills"

      className={
        darkMode

          ? `
            min-h-screen
            bg-slate-950
            text-white
            px-6
            py-24
          `

          : `
            min-h-screen
            bg-gray-100
            text-black
            px-6
            py-24
          `
      }
    >

      <motion.div

        className="max-w-7xl mx-auto"

        initial={{ opacity: 0 }}

        whileInView={{ opacity: 1 }}

        transition={{ duration: 1 }}
      >

        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          text-center
          text-cyan-400
          mb-20
        "
        >
          Skills
        </h2>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-8
        "
        >

          {
            skills.map((skill, index) => (

              <motion.div

                key={index}

                className={
                  darkMode

                    ? `
                      bg-slate-900
                      rounded-2xl
                      p-8
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-4
                      shadow-lg
                      hover:scale-105
                      transition
                      duration-300
                      cursor-pointer
                    `

                    : `
                      bg-white
                      rounded-2xl
                      p-8
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-4
                      shadow-lg
                      hover:scale-105
                      transition
                      duration-300
                      cursor-pointer
                    `
                }

                initial={{ opacity: 0, y: 50 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >

                <div
                  className={`
                    text-6xl
                    ${skill.color}
                  `}
                >

                  {skill.icon}

                </div>

                <h3 className="text-xl font-semibold">

                  {skill.name}

                </h3>

              </motion.div>

            ))
          }

        </div>

      </motion.div>

    </section>
  )
}

export default Skills