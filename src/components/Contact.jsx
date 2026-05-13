// import "./Contact.css"
// function Contact(){
//     return(
//         <section className="contact">
//             <h2>Contact</h2>
//             <p>Email:saqibashraf7402@gmail.com</p>
//             <p>LinkedIn:saqibashraf7402@gmail.com</p>
//             <p>Github:saqibashraf7402@gmail.com</p>
//         </section>
//     )
    
// }
// export default Contact

// import "./Contact.css"

// function Contact() {
//   return (
//     <section className="contact">

//       <h2>Contact Me</h2>

//       <p>
//         Feel free to contact me for projects,
//         internships, or collaboration.
//       </p>

//       <div className="contact-info">

//         <div className="contact-card">
//           <h3>Email</h3>
//           <p>saqib@gmail.com</p>
//         </div>

//         <div className="contact-card">
//           <h3>LinkedIn</h3>
//           <p>linkedin.com/in/saqib</p>
//         </div>

//         <div className="contact-card">
//           <h3>GitHub</h3>
//           <p>github.com/saqib</p>
//         </div>

//       </div>

//     </section>
//   )
// }

// export default Contact

//phase 3 light darkmode code
// import { motion } from "framer-motion"

// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt
// } from "react-icons/fa"

// function Contact({ darkMode }) {

//   return (

//     <section
//       id="contact"
//        className={darkMode? `min-h-screen bg-slate-950 text-white px-6 py-24`: `
//        min-h-screen bg-gray-100 text-black px-6 py-24 `}>
//       <motion.div
//         className="max-w-6xl mx-auto"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}>
//         <h2 className="text-4xl md:text-6xl font-bold text-center
//         text-cyan-400 mb-20">
//           Contact Me
//         </h2>

//         <div className=" grid md:grid-cols-3 gap-10">

//           <motion.div className={darkMode? `bg-slate-900 rounded-2xl p-10
//           text-center shadow-xl hover:scale-105 transition duration-300`: `bg-white
//           rounded-2xl p-10 text-center shadow-xl hover:scale-105 transition duration-300`
//          }
//          initial={{ opacity: 0, y: 50 }}
//          whileInView={{ opacity: 1, y: 0 }}
//          transition={{ duration: 0.5 }}>

//             <FaEnvelope
//               className="text-5xl text-cyan-400 mx-auto mb-6"/>

//             <h3 className="text-2xl font-bold mb-4">
//               Email
//             </h3>

//             <p
//               className={ darkMode? "text-slate-400": "text-gray-600"}>
//               saqibashraf740@gmail.com.com
//             </p>

//           </motion.div>

//           <motion.div

//             className={darkMode ? `bg-slate-900 rounded-2xl p-10 text-center
//             shadow-xl hover:scale-105 transition duration-300`: `bg-white
//             rounded-2xl p-10 text-center shadow-xl hover:scale-105 transition
//             duration-300 `}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: 0.2
//             }}>

//             <FaPhone
//               className="text-5xl text-cyan-400 mx-auto mb-6"/>

//             <h3 className="text-2xl font-bold mb-4">
//               Phone
//             </h3>

//             <p
//               className={ darkMode ? "text-slate-400" : "text-gray-600"} >
//               +917889872661
//             </p>

//           </motion.div>

//           <motion.div
//           className={
//               darkMode? `bg-slate-900 rounded-2xl p-10 text-center shadow-xl
//               hover:scale-105 transition duration-300 ` : `bg-white rounded-2xl
//               p-10 text-center shadow-xl hover:scale-105 transition duration-300` }
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//               duration: 0.5,
//               delay: 0.4}}>

//             <FaMapMarkerAlt
//               className="text-5xl text-cyan-400 mx-auto mb-6"/>

//             <h3 className="text-2xl font-bold mb-4">
//               Location
//             </h3>

//             <p
//               className={ darkMode? "text-slate-400" : "text-gray-600"
//               }
//             >
//               Jammu & Kashmir, India
//             </p>

//           </motion.div>

//         </div>

//       </motion.div>

//     </section>
//   )
// }

// export default Contact



//4 for frontend backend form connection

import { useState } from "react"

import axios from "axios"

import { motion } from "framer-motion"

function Contact({ darkMode }) {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: ""

  })

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState("")

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response = await axios.post(

        "https://localhost:5000/api/contact",

        formData

      )

      setSuccess(response.data.message)

      setFormData({

        name: "",
        email: "",
        message: ""

      })

    } catch (error) {

      setSuccess("Something went wrong")

    } finally {

      setLoading(false)

    }

  }

  return (

    <section

      id="contact"

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

        className="max-w-4xl mx-auto"

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
          mb-16
        "
        >
          Contact Me
        </h2>

        <form

          onSubmit={handleSubmit}

          className={
            darkMode

              ? `
                bg-slate-900
                p-10
                rounded-2xl
                shadow-2xl
                space-y-6
              `

              : `
                bg-white
                p-10
                rounded-2xl
                shadow-2xl
                space-y-6
              `
          }
        >

          <div>

            <label className="block mb-2 text-lg">

              Name

            </label>

            <input

              type="text"

              name="name"

              value={formData.name}

              onChange={handleChange}

              required

              className="
              w-full
              p-4
              rounded-xl
              bg-gray-200
              text-black
              outline-none
            "
            />

          </div>

          <div>

            <label className="block mb-2 text-lg">

              Email

            </label>

            <input

              type="email"

              name="email"

              value={formData.email}

              onChange={handleChange}

              required

              className="
              w-full
              p-4
              rounded-xl
              bg-gray-200
              text-black
              outline-none
            "
            />

          </div>

          <div>

            <label className="block mb-2 text-lg">

              Message

            </label>

            <textarea

              name="message"

              rows="6"

              value={formData.message}

              onChange={handleChange}

              required

              className="
              w-full
              p-4
              rounded-xl
              bg-gray-200
              text-black
              outline-none
            "
            />

          </div>

          <button

            type="submit"

            disabled={loading}

            className="
            bg-cyan-400
            text-black
            px-8
            py-4
            rounded-xl
            font-bold
            hover:scale-105
            transition
            duration-300
          "
          >

            {
              loading
                ? "Sending..."
                : "Send Message"
            }

          </button>

          {
            success && (

              <p className="text-green-400 text-lg">

                {success}

              </p>

            )
          }

        </form>

      </motion.div>

    </section>
  )
}

export default Contact