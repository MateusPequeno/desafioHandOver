import express from "express";
import {
  createPanels,
  getPanels,
  getSinglePanels,
  deletePanels,
  updatePanels,
} from "../controllers/productsController";
import { verifyToken } from "../middlewares/auth";

const router = express.Router();

// from /Panels
router.get("/", getPanels);

router.post("/", verifyToken, createPanels);

router.get("/:id", verifyToken, getSinglePanels);

router.delete(`/:id`, verifyToken, deletePanels);

router.put("/:id", verifyToken, updatePanels);

export default router;
