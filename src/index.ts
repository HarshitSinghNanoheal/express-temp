import express from "express";
import { exec } from "child_process";
import fs from "fs";

const app = express();
app.use(express.json());

// Path traversal / arbitrary file read
app.get("/read", (req, res) => {
  const p = req.query.path as string;
  res.send(fs.readFileSync(p, "utf8"));
});

// Command injection
app.get("/ping", (req, res) => {
  const host = req.query.host as string;
  exec(`ping -c 1 ${host}`, (err, stdout) => res.send(stdout));
});

// Eval of user-controlled input (RCE pattern)
app.post("/eval", (req, res) => {
  const out = eval(req.body.code as string);
  res.json({ out });
});

export default app;
