const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

require("dotenv").config();

// routes
app.use("/api", require("./routes"));

app.listen(port, () => console.log("=> server running on port %s", port));
