import  express, { json, response } from "express"
import mongoose from "mongoose"
import routerIndex from "./routes/routerIndex.mjs"
import mqttClient from "../utils/mqttservices.mjs"

const app = express()
const PORT  = process.env.PORT || 3000

mongoose.connect("mongodb://localhost/IOT_DB")
.then(()=>{
    console.log(`Connected to IOT_DB`)
})
.catch((err)=>{
    console.log(`Error: ${err}`)
})

//Routes
app.use(json())
app.use(routerIndex);

app.get("/", (request,response)=> {
    response.status(200).send({"msg":"Iot Project default route"})
})

app.listen(PORT,()=>{
    console.log("Running IOT server on Port: ", PORT)

})