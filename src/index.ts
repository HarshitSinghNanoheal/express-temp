import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";

// Documentation: https://googleapis.github.io/js-genai/release_docs/index.html

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3005;

app.post("/", async (req: Request, res: Response) => {
  try {
    
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
