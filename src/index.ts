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
    // Write your code here
  } catch (e) {
    console.log(e);
  }
});

// Curl command for this endpoint
// curl --location 'http://localhost:3005' \
// --header 'Content-Type: application/json' \
// --data '{"query" : "Write a 100-word poem."}'

app.post("/event", async (req: Request, res: Response) => {
  try {
    // Write your code here
  } catch (e) {
    console.log(e);
  }
});

// Curl command for this event stream endpoint
// curl -N -X POST http://localhost:3005/event \
//   -H "Content-Type: application/json" \
//   -d '{"query":"Write a long poem about the forest"}'

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
