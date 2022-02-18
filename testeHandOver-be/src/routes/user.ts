import express from "express";
import {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controllers/userController";
import { verifyToken } from "../middlewares/auth";

const router = express.Router();

router.get("/", verifyToken, getAllUser);

router.post("/", createUser);

router.get("/:id", verifyToken, getSingleUser);

router.delete(`/:id`, verifyToken, deleteUser);

router.put("/:id", verifyToken, updateUser);

export default router;
