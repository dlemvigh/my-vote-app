import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

const votes: { [x: string]: number } = {};

app.get("/", (req, res) => {
  res.send("Hello, world!!");
});

app.all("/vote/:id", (req, res) => {
  const id = req.params.id?.toLowerCase();
  votes[id] = (votes[id] || 0) + 1;
  console.log(`Vote for ${id} received`);
  res.status(200);
  res.json(votes);
});

app.get("/vote", (req, res) => {
  res.status(200);
  res.json(votes);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
