const express = require("express")

const router = express.Router()

const Message = require("../models/message")

router.post("/", async (req, res) => {

  try {

    const { name, email, message } = req.body

    const newMessage = new Message({

      name,
      email,
      message

    })

    await newMessage.save()

    res.status(201).json({

      success: true,
      message: "Message Saved"

    })

  } catch (error) {
    console.log("CONTACT ERROR ",error)

    res.status(500).json({

      success: false,
      message: error.message

    })

  }

})

module.exports = router