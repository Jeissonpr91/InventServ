const mongoose = require("mongoose");

require("dotenv").config({ path: "var3.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: true
    });
    console.log("✅ Base de datos conectada!!");
    console.log("\n===========================================");
  } catch (error) {
    console.log(error);
    process.exit(1); // si hay error este comando detiene la app
  }
};

module.exports = conectarDB;
