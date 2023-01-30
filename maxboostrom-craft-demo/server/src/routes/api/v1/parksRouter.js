import express from "express";
import Park from "../../../models/Park.js";

const parksRouter = new express.Router();

parksRouter.get("/", (req, res) => {
  res
    .set({ "Content-Type": "application/json" })
    .status(200)
    .json({ parks: Park.findAll() });
});

export default parksRouter;