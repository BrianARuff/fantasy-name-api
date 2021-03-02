const express = require('express')
const cors = require("cors");
const fantasyName = require("./fantasyName");

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req: any, res: any) => {
  const name = new fantasyName().getName(5);
  res.json({name})
})

app.listen(process.env.PORT || 3000, () => {
  console.log("App running on port " + (3000))
})
