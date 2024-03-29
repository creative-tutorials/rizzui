import express, { urlencoded, json } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const allowedOrigins = process.env.ALLOWED_ORIGINS || [];
const corsOptions = {
    origin: allowedOrigins,
};
const app = express();
app.use(cors(corsOptions));
app.use(json({ limit: "500kb" }));
app.use(urlencoded({ limit: "500kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "500kb", extended: false }));
const port = process.env.PORT;
if (!port)
    throw new Error("Port not found");
app.get("/status", async (_, res) => {
    res.send("OK");
});
app.listen(port, () => {
    console.log(`[server]: Server is running on port: ${port}`);
});
//# sourceMappingURL=index.js.map