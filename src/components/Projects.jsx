// import "./Projects.css"
// function Projects(){
//     return(
//         <section>
//             <h2>Projects</h2>
//             <div className="projects-container">
//               <div className="project-card">
//                 <h3>Portfolio Website</h3>
//                 <p>Personal Portfolio website built using React</p>
//                </div>
//                <div className="project-card">
//                 <h3>Weather App</h3>
//                 <p>Fetching real weather details from the citiers using api integration of open ai</p>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Projects

//phase 2 code
// import { motion } from "framer-motion"

// import {
//   FaGithub,
//   FaExternalLinkAlt
// } from "react-icons/fa"

// import portfolio from "../assets/portfolio.png"
// import todo from "../assets/todo.png"
// import weather from "../assets/weather.png"

// function Projects() {

//   const projects = [

//     {
//       title: "Portfolio Website",

//       image:portfolio,

//       description:
//         "Modern responsive portfolio website built using React.js, Tailwind CSS and Framer Motion.",

//       tech: [
//         "React",
//         "Tailwind",
//         "Framer Motion"
//       ],

//       github: "https://github.com/",

//       live: "https://vercel.com/"
//     },

//     {
//       title: "Todo Application",

//       image: todo,

//       description:
//         "Task management application with CRUD functionality and responsive UI.",

//       tech: [
//         "React",
//         "JavaScript",
//         "CSS"
//       ],

//       github: "https://github.com/",

//       live: "https://vercel.com/"
//     },

//     {
//       title: "Weather Application",

//       image: weather,

//       description:
//         "Weather forecast application using API integration and responsive design.",

//       tech: [
//         "React",
//         "API",
//         "Tailwind"
//       ],

//       github: "https://github.com/",

//       live: "https://vercel.com/"
//     }

//   ]

//   return (

//     <section
//       id="projects" className=" min-h-screen bg-slate-900 text-white px-6 py-24">

//       <motion.div className="max-w-7xl mx-auto"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }} >

//         <h2
//           className=" text-4xl md:text-6xl font-bold text-center text-cyan-400 mb-20">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

//           {
//             projects.map((project, index) => (

//               <motion.div 
//                 key={index}
//                 className="bg-slate-950 rounded-2xl overflow-hidden shadow-xl
//                 hover:scale-105 transition duration-300"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.2
//                 }}>

//                 <img
//                   src={project.image}
//                   alt={project.title}

//                   className="w-full h-56 object-cover"/>

//                 <div className="p-6">
//                     <h3 className="text-2xl font-bold mb-4">
//                     {project.title}
//                     </h3>

//                 <p className="text-slate-400 leading-relaxed mb-6">
//                     {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-3 mb-6">
//                     {
//                       project.tech.map((item, i) => (

//                         <span
//                           key={i}

//                           className="bg-cyan-400 text-black px-3 py-1 rounded-full
//                           text-sm font-semibold">
//                           {item}
//                         </span>

//                       ))
//                     }

//                   </div>

//                   <div className="flex gap-4">

//                     <a
//                       href={project.github}
//                       target="_blank"

//                       className="
//                       flex
//                       items-center
//                       gap-2
//                       bg-slate-800
//                       px-5
//                       py-3
//                       rounded-xl
//                       hover:bg-cyan-400
//                       hover:text-black
//                       transition
//                       duration-300
//                     "
//                     >

//                       <FaGithub />

//                       GitHub

//                     </a>

//                     <a
//                       href={project.live}
//                       target="_blank"

//                       className="
//                       flex
//                       items-center
//                       gap-2
//                       bg-cyan-400
//                       text-black
//                       px-5
//                       py-3
//                       rounded-xl
//                       hover:scale-105
//                       transition
//                       duration-300
//                     "
//                     >

//                       <FaExternalLinkAlt />

//                       Live Demo

//                     </a>

//                   </div>

//                 </div>

//               </motion.div>

//             ))
//           }

//         </div>

//       </motion.div>

//     </section>
//   )
// }

// export default Projects

//phase 3 darkcode light code
import { motion } from "framer-motion"

import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa"

import portfolioImage from "../assets/portfolio.png"
import todoImage from "../assets/todo.png"
import weatherImage from "../assets/weather.png"

function Projects({ darkMode }) {

  const projects = [

    {
      title: "Portfolio Website",

      image: portfolioImage,

      description:
        "Modern responsive portfolio website built using React.js, Tailwind CSS and Framer Motion.",

      tech: [
        "React",
        "Tailwind",
        "Framer Motion"
      ],

      github: "https://github.com/",

      live: "https://vercel.com/"
    },

    {
      title: "Todo Application",

      image: todoImage,

      description:
        "Task management application with CRUD functionality and responsive UI.",

      tech: [
        "React",
        "JavaScript",
        "CSS"
      ],

      github: "https://github.com/",

      live: "https://vercel.com/"
    },

    {
      title: "Weather Application",

      image: weatherImage,

      description:
        "Weather forecast application using API integration and responsive design.",

      tech: [
        "React",
        "API",
        "Tailwind"
      ],

      github: "https://github.com/",

      live: "https://vercel.com/"
    }

  ]

  return (

    <section

      id="projects"

      className={
        darkMode

          ? `
            min-h-screen
            bg-slate-900
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
          Projects
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
        "
        >

          {
            projects.map((project, index) => (

              <motion.div

                key={index}

                className={
                  darkMode

                    ? `
                      bg-slate-950
                      rounded-2xl
                      overflow-hidden
                      shadow-xl
                      hover:scale-105
                      transition
                      duration-300
                    `

                    : `
                      bg-white
                      rounded-2xl
                      overflow-hidden
                      shadow-xl
                      hover:scale-105
                      transition
                      duration-300
                    `
                }

                initial={{ opacity: 0, y: 50 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.2
                }}
              >

                <img
                  src={project.image}

                  alt={project.title}

                  className="
                  w-full
                  h-56
                  object-cover
                "
                />

                <div className="p-6">

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mb-4
                  "
                  >

                    {project.title}

                  </h3>

                  <p
                    className={
                      darkMode

                        ? `
                          text-slate-400
                          leading-relaxed
                          mb-6
                        `

                        : `
                          text-gray-600
                          leading-relaxed
                          mb-6
                        `
                    }
                  >

                    {project.description}

                  </p>

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                    mb-6
                  "
                  >

                    {
                      project.tech.map((item, i) => (

                        <span

                          key={i}

                          className="
                          bg-cyan-400
                          text-black
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          font-semibold
                        "
                        >

                          {item}

                        </span>

                      ))
                    }

                  </div>

                </div>

              </motion.div>

            ))
          }

        </div>

      </motion.div>

    </section>
  )
}

export default Projects