const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const testRoutes = require("./routes/test");

app.use(testRoutes);
app.get("/test", (req, res) => {
  console.log(req.query.name);
});
app.listen(3000, () => console.log("connected"));
