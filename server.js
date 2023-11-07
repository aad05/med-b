const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
require("dotenv").config();
const cluster = require("cluster");
const os = require("os");
const numCPU = os.cpus().length;

const app = express();

// Security
app.use(cors());
app.use(xss());

// Body parsers
app.use(express.json());

// Routes config
app.use(require("./routes"));

// Multiple CPU
// if (cluster.isMaster) for (let i = 0; i < numCPU; i++) cluster.fork();
// else
//   app.listen(process.env.PORT || 8080, () => {
//     console.log(
//       `${process.pid}: Server running on port http://localhost:${process.env.PORT}`
//     );
//   });

// Single CPU
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
