import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    // origin: "*",
    // origin: process.env.CORS_ORIGIN,
    origin: "http://localhost:5173",  
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],  
    allowedHeaders: ["Content-Type", "Authorization"],  
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//Import all User Routes
import userLoginRouter from "./routes/User.route.js"; 

//Routes defined
app.use("/api/v1/user", userLoginRouter); 

app.get("/", (req, res) => {
  res.send("This is home page");
});
 

export default app;
