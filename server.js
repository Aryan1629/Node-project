const ex=require("express"), app = ex(), db=require("./models/index.js"),
 productpage=require("./helpers/products.js"),
 showpage=require("./helpers/showpage.js"),
 ProductAPI=require(`./helpers/productAPI.js`),
 signin=require("./helpers/signin.js"),
 signup=require("./helpers/signup.js"),
 shipping=require("./helpers/Shipping.js")
 verifytoken=require("./utils.js"),
products=require("./data/product.js"),
 PORT =process.env.PORT||2344; //decalering variables and exPORTing express
 dotenv=require("dotenv");
 dotenv.config();
app.use(ex.static("public"))  //  deaclering stacic folder for use of css , images and js files in ejs
app.use(ex.json())    // to parse the data coming from the client in request object

app.get("/",(req,res)=>res.render("index.ejs"));
app.get("/products" ,productpage);
app.get("/showpage/:_id",showpage)
app.get("/api/product/:_id",ProductAPI);
app.get("/cart",(req,res)=>res.render("cart.ejs"))
app.get("/search/:search_content",(req,res)=>res.render("search.ejs"))
app.get("/shipping/:token",verifytoken,shipping)
app.get("/sign-in",(req,res)=>res.render("sign-in.ejs"))
app.get("/sign-up", (req,res)=> res.render("sign-up.ejs"))
app.get("/order/:token",verifytoken,(req,res)=>res.render("order.ejs"))
app.get("/wishlist/:token",verifytoken,(req,res)=>res.render("wishlist.ejs"))

// ---------------------------POST MATHODS--------------------------
app.post("/sign-in",signin )
app.post("/sign-up",signup)
//----------------------listen-------------------------------------
app.listen(PORT,()=>{console.log(`the server is at ${PORT}`);

}); // to run server on the given PORT
// app.get("/add",async (req,res)=>{
//     try{
//       const data = await db.Products.insertMany(products);
//     }catch(err){
//         console.log(err)
//         res.json({msg:err});
//     }
// })
// app.get("/del",async (req,res)=>{
//     try{
//       const data = await db.Products.deleteMany();
//     }catch(err){
//         res.json({msg:err});
//     }
// })


