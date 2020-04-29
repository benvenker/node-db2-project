require("dotenv").config();
const express = require("express");
const db = require("./data/db-config");

const server = express();
const port = process.env.PORT;
server.use(express.json());
server.get("/cars", (req, res) => {
  db("cars").then((cars) => res.json(cars));
});

server.post("/cars", (req, res) => {
  const car = req.body;
  console.log(req.body);
  db("cars")
    .insert(req.body)
    .then((ids) => {
      db("cars")
        .where({ id: ids[0] })
        .then((newCarEntry) => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});
