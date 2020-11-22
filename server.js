// Imports
const express = require("express");
const usersRoutes = require("./routes/users");
const salonesRoutes = require("./routes/salones");
const reservacionesRoutes = require("./routes/reservaciones");
// Express app creation
const app = express();
const cors = require("cors");

// Configurations
const appConfig = require("./configs/app");

app.use(express.static("public"));

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/salones", salonesRoutes);
app.use("/api/reservaciones", reservacionesRoutes);
// App init
app.listen(appConfig.expressPort, () => {
  console.log(
    `Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`
  );
});
