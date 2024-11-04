import express, { Request, Response } from "express";
import authRoute from "./routes/authRoutes";
import todoRoute from "./routes/todosRoutes";
import cors from "cors";

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Adjust this to restrict to certain origins in production
  res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
  next();
});

app.use(express.json());
// routes
app.use("/api/auth", authRoute);
app.use("/api/todos", todoRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server is running on port http://localhost:3000");
});
