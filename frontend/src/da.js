const mongoose = require("mongoose");
const detail = require("./components/db");

mongoose.connect("mongodb://localhost/medlife",()=>
{
  console.log("db connected");
  detail.create({
    id:"1",
    class:"asd",
  })
});