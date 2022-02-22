const express= require("express");
const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"connected to heroku"});
})

module.exports = router;