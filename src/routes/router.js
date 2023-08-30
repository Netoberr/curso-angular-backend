import express from "express";
import {
  getTask,
  addTask,
  updateTask,
  deleteTask,
  getTaskById
} from "../controllers/controller.js";

const router = express.Router();

router.get("/", getTask);

router.get("/:id", getTaskById);

router.post("/", addTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
