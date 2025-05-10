import mqtt from "mqtt";
import { Temp } from "../db_schemer/temperature.mjs";

const mqttClient = mqtt.connect("mqtt://192.168.8.116")

//connecting to the bloker
mqttClient.on("connect",()=>{
    console.log("Connected to mqtt")
    //subsrcibibg to the bloker
    mqttClient.subscribe("iot/temp", (err)=>{
        if(err){
            console.log(`Failed to subscibe: ${err}`)
        }else {
            console.log("Subscribed to iot/temp")
        }
    })
})

//handling the messages
mqttClient.on("message",(topic,message)=>{
    
})

export default mqttClient