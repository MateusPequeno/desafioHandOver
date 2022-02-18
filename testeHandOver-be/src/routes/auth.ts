import express from "express";
import {
  authenticate,
  validate,
  refreshToken,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/", authenticate);

router.post("/validate", validate);

router.post("/refresh", refreshToken);

export default router;
