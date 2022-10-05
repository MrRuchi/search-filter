//import { Users } from "./users";
let express = require("express");
let Users = require("./users");

const app = express();

let cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
  console.log(q);
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) => {
      return keys.some((key) => item[key].toLowerCase().includes(q));
    });
  };

  /** if you use mongoDB
   *  const users= User.find({$regex:q})
   */
  res.json(search(Users));
});

app.listen(5000, () => console.log("API is working!"));
