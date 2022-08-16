const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

// set static folder
app.use(express.static("public"));

// routes
app.use("/api", require("./routes"));

// enable cors
app.use(cors());

app.listen(PORT, () => console.log("=> server running on port %s", PORT));
