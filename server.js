import express from "express";
import cors from "cors";
import db from "./config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", async (req, res) => {
  const data = req.body;
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  res.send({ message: "User added" });
});
app.get("/users", async (req, res) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  res.json(querySnapshot);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
