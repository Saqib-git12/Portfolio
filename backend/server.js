// const express = require("express")

// const cors = require("cors")

// require("dotenv").config()

// const app = express()

// app.use(cors())

// app.use(express.json())

// app.get("/", (req, res) => {

//   res.send("Backend Running")

// })

// const PORT = process.env.PORT || 5000

// app.listen(PORT, () => {

//   console.log(`Server running on port ${PORT}`)

// })
// 2
// const express = require("express")

// const cors = require("cors")

// require("dotenv").config()

// const connectDB = require("./config/db")

// const app = express()

// connectDB()

// app.use(cors())

// app.use(express.json())

// app.get("/", (req, res) => {

//   res.send("Backend Running")

// })

// const PORT = process.env.PORT || 5000

// app.listen(PORT, () => {

//   console.log(`Server running on port ${PORT}`)

// })

//3


const express = require("express")
const cors = require("cors")
const app = express()
// app.use(cors({
//   origin:[
//         "http://localhost:5173",
//         "https://portfolio-three-psi-07hf8z2ubq.vercel.app"

//   ]
// }))
app.use(cors())
require("dotenv").config()
app.use(express.json())
const contactRoutes = require("./routes/contactRoutes")
const connectDB = require("./config/db")






connectDB()

// app.use(cors())
//front vercel backend render 
// app.use(cors({
//   origin:"https://portfolio-three-psi-07hf8z2ubq.vercel.app"
// }))



app.use("/api/contact", contactRoutes)

app.get("/", (req, res) => {

  res.send("Backend Running")

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})