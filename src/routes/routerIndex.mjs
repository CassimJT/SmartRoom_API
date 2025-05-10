import { Router } from "express";
import router from "./routes.mjs";

const routerIndex = Router();
routerIndex.use(router);

export default routerIndex;
