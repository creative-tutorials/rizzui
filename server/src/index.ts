import express, { Express, urlencoded, json } from "express";
import cors from "cors";
import { Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const allowedOrigins = process.env.ALLOWED_ORIGINS || [];
const corsOptions = {
  origin: allowedOrigins,
};

const app: Express = express();

app.use(cors(corsOptions));
app.use(json({ limit: "500kb" }));
app.use(urlencoded({ limit: "500kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "500kb", extended: false }));
const port = process.env.PORT;

if (!port) throw new Error("Port not found");

app.get("/status", async (_, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`[server]: Server is running on port: ${port}`);
});
