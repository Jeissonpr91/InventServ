const express = require("express");
const conectarDB = require("./config/db");

// 101 - lastima pense que iban a ser 100 nada mas 🤷🏻‍♂️ - npm i cors - importamos
const cors = require("cors");

const app = express();

conectarDB();

app.use(cors());

// 103 - Vamos a routes/auth.js

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/productos", require("./routes/productos"));

app.listen(PORT, () => {
  console.log("===========================================\n");
  console.log(`✅ Servidor funcionando en el puerto ${PORT}!!`);
});

app.get("/", (req, res) => {
  res.send("👷🏻‍♂️ Backend de Invenserver!!... 👍🏼");
});
