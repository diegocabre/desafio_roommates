const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
const router = require("./routes/routes");

//middleware
app.use(express.json());
app.use("/", router);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
