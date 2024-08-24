const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const startupRegister = require("./models/startupRegister.js");
const investorRegister = require("./models/investorRegister.js");
const methodOverride = require("method-override");
const port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/"));
app.use(express.static(__dirname + '/'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main().then(()=>{
    console.log("connected");
}).catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/SIH");
}
//render to startup register form
app.get("/startupRegister",(req,res)=>{
    res.render("Backend/startupReg.ejs");
});
//render to startup login form
app.get("/startupLogin",(req,res)=>{
    res.render("startup.ejs");
});
// saving startup register data and rendering to startup login
app.post("/startupDataSave",(req,res)=>{
let {name,email,password,technology, Industry_Focus,Startup_eligibility_criteria,Startup_Revenue_Preference,location} = req.body;
let newStartup = new startupRegister({
    name:name,
    email:email,
    password:password,
    technology:technology,
    Industry_Focus:Industry_Focus,
    Startup_eligibility_criteria:Startup_eligibility_criteria,
    Startup_Revenue_Preference:Startup_Revenue_Preference,
    location:location
});
//login-authentication
app.post("/startupAuthenticate",async(req,res)=>{
   let{email,password}=req.body;
   let verify = await startupRegister.find({email:{email}},{password:{password}});
   console.log( verify);
});
newStartup.save().then(res=>{
    console.log(res);
}).catch((err)=>{
console.log(err);
});
res.redirect("/startupLogin");
});


//Investor
//render to investor register form
app.get("/investorRegister",(req,res)=>{
    res.render("Backend/investor.ejs");
});
//render to investor login form
app.get("/investorLogin",(req,res)=>{
    res.render("investor.ejs");
});
// saving investor register data and rendering to investor login
app.post("/investorDataSave",(req,res)=>{
let {name,email,password,technology, Investor_Type,Year_of_establishment,Employee_count,headquaters,website} = req.body;
let newInvestor= new investorRegister({
    name:name,
    email:email,
    password:password,
    technology:technology,
    Investor_Type:Investor_Type,
    Year_of_establishment:Year_of_establishment,
    Employee_count:Employee_count,
    headquaters:headquaters,
    website:website
});
newInvestor.save().then(res=>{
    console.log(res);
}).catch((err)=>{
console.log(err);
});
res.redirect("/investorLogin");
});
app.post("/investorAuthenticate",async(req,res)=>{
    let{email,password}=req.body;
    let verify = await investorRegister.find({email:{email}},{password:{password}});
    console.log( verify);
 });


 app.listen(5050, ()=>{
    console.log("server is listening on port 8080");

}
);