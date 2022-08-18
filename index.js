const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// routes
app.use("/api", require("./routes"));

// enable cors
app.use(cors());

app.listen(PORT, () => console.log("=> server running on port %s", PORT));
