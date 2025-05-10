import { request, response, Router } from "express";
import { validationResult,matchedData,checkSchema } from "express-validator";
import tempVSchemer from "../../validation-schemer/tempVSchemer.mjs";
import { Temp } from "../../db_schemer/temperature.mjs";
const router = Router();
// Get temperature readings
router.get("/api/iot/temp", async (request, response) => {
    try {
        const temps = await Temp.find().sort({ createdAt: -1 }).limit(50); // get latest 50
        response.status(200).json(temps);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        response.status(500).json({ error: "Internal Server Error" });
    }
});

//post temp
router.post("/api/iot/temp",checkSchema(tempVSchemer),async(request,response)=> {
    const result = validationResult(request)
    if(!result.isEmpty()) return response.status(400).send({Error:result.array()});
    const data = matchedData(request);
    const newTemp = new Temp(data);
    try {
        const savedTemp = await newTemp.save()
        return response.status(200).send(savedTemp);
    } catch (error) {
        console.log(`Error saving the reading ${error}`)
        response.status(500).json({ error: "Internal Server Error" });
    }
})

export default router