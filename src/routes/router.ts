import { Router } from "express";
import { getData } from "../controllers/api";

const router = Router();

//get data from https://randomuser.me/api/
router.get("/api/get/data", getData);

export default router;
