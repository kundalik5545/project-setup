import connectdb from "./db/dbconnect.db.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

connectdb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `🚀 Server is listening on port no http://localhost:${process.env.PORT}`
      );
    });

    app.on("error", (err) => {
      console.error("🚫 There is error in app.on", err);
      //   throw err;
    });
  })
  .catch((err) => {
    console.error("🚫 Connection to mongodb & server failed !!!", err);
    throw err;
  });
