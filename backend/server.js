const express = require("express");
const products = require("./data/product")
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const product = require('./data/product')
const bodyParser=require("body-parser")
var cors = require('cors');

const encoder = bodyParser.urlencoded();
//dotenv config
dotenv.config();
//connecting to mysql database
connectDb.execute('SELECT * FROM logindb')
  .then(result => {
    console.log(result[0]);
  })
  .catch(err => {
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/signup",encoder, (req,res) => 
{
      const emailid = req.body.email;
      const password = req.body.password;
      const Firstname = req.body.Fname;
      const Lastname = req.body.Lname;
      
      connectDb.query("INSERT INTO logindb (emailid ,password, firstname,lastname) VALUES (?,?,?,?)",
      [emailid,password,Firstname,Lastname],(err, result,field)=>{

        console.log(err);
        res.redirect("/login");
      }
      );
});

app.post("/login",encoder, (req,res) => 
{
      const emailid = req.body.email;
      const password = req.body.password;
      
      connectDb.query("SELECT * From logindb WHERE emailid = ? AND password = ?",
      [emailid,password],(err, result)=>{
        if(err)
        {
          res.send({err:err})
        }

        if(result.length >0)
        {
          res.send(result);
        }
        else
        {
          res.send("message:wrong username password");
        }
        
      });
    
});

app.get("/product",(req,res)=>
{
    res.json(products);
});


app.get("/product/:ids" ,(req,res) => {
    const pro = products.find((p) => p.id === req.params.ids);
    res.json(pro);

});
const PORT = 8080;
// app.listen(process.env.PORT||PORT,()=>{
//     console.log('server is running in '+ process.env.NODE_ENV + ' mode on port ' +  PORT)  ;
// });
app.listen(8080,()=>{
  console.log("its working")
});



