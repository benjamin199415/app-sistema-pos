const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const productoRoutes = require("./routes/productoRoutes");
const ventaRoutes = require("./routes/ventaRoutes"); // 👈

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/productos", productoRoutes);
app.use("/api/ventas", ventaRoutes); // 👈 nueva ruta

sequelize.sync().then(() => {
  console.log("Base de datos conectada ✅");
  app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));
});
