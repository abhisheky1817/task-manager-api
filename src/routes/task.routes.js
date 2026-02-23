import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all tasks");
});

export default router;