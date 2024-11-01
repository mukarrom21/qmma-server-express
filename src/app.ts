import express from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to Qawmi management server app!");
});

// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

export default app;
