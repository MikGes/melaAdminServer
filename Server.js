const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const ServiceRoute = require("./routes/Service")
app.use(cors())
app.use(express.json())
app.use("/services",ServiceRoute)
app.use("/customer",require('./routes/customerRoute'))
app.use("/provider",require('./routes/providerRoute'))
app.use("/jobs",require('./routes/jobs'))
app.use("/admin",require('./routes/Admin'))
app.use("/email",require("./routes/email"))
app.use("/reports",require('./routes/Report'))
app.use("/requests",require('./routes/requestsRoute'))
mongoose.connect("mongodb+srv://mikgess:melaServices@cluster0.vmzeqwn.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Database Connected")).catch((err)=>{
    console.log(err.message)
})
app.listen(5500,()=>[
    console.log("Server is running on port 5500")
])