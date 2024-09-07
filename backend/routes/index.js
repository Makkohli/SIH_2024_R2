import express from "express";
import userRouter from "./user.js";
import dataRouter from "./data.js";

const router = express.Router({ mergeParams: true });


router.get("/", (req, res) => {
  res.send("router used");
});

router.use("/user", userRouter);
router.use("/data", dataRouter);

export default router;