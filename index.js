const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const app = express();

// enable cors
app.use(cors());

app.listen(PORT, () => console.log("=> server running on port %s", PORT));
