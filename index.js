const express = require ("express");
const cors = require ("cors");
const db = require ("./db/connect");
const { default: mongoose } = require("mongoose");
require ("dotenv").config();


const app = express();

// connecting db
mongoose.set("strictQuery", false);
db();

app.get("/", (req,res) => {
    res.send("welcome to my product");
})

const PORT = process.env.PORT || 4000;

const products = [
    {
        id:"1",
        product_name:"Intelligent Fresh Chips",
        product_price:655,
        product_material:"Concrete",
        product_color:"mint green"
    },
    {
        id:"2",
        product_name:"Practical Fresh Sausages",
        product_price:911,
        product_material:"Cotton",
        product_color:"indigo"
    },
    {
        id:"3",
        product_name:"Refined Steel Car",
        product_price:690,
        product_material:"Rubber",
        product_color:"gold"
    },
    {
        id:"4",
        product_name:"Gorgeous Plastic Pants",
        product_price:492,
        product_material:"Soft",
        product_color:"plum"
    },
    {
        id:"5",
        product_name:"Sleek Cotton Chair",
        product_price:33,
        product_material:"Fresh",
        product_color:"black"
    },
    {
        id:"6",
        product_name:"Awesome Wooden Towels",
        product_price:474,
        product_material:"Plastic",
        product_color:"orange"
    },
    {
        id:"7",
        product_name:"Practical Soft Shoes",
        product_price:500,
        product_material:"Rubber",
        product_color:"pink"
    },
    {
        id:"8",
        product_name:"Incredible Steel Hat",
        product_price:78,
        product_material:"Rubber",
        product_color:"violet"
    },
    {
        id:"9",
        product_name:"Awesome Wooden Ball",
        product_price:28,
        product_material:"Soft",
        product_color:"azure"
    },
    {
        id:"10",
        product_name:"Generic Wooden Pizza",
        product_price:84,
        product_material:"Frozen",
        product_color:"indigo"
    },
    {
        id:"11",
        product_name:"Unbranded Wooden Cheese",
        product_price:26,
        product_material:"Soft",
        product_color:"black"
    },
    {
        id:"12",
        product_name:"Unbranded Plastic Salad",
        product_price:89,
        product_material:"Wooden",
        product_color:"pink"
    },
    {
        id:"13",
        product_name:"Gorgeous Cotton Keyboard",
        product_price:37,
        product_material:"Concrete",
        product_color:"sky blue"
    },
    {
        id:"14",
        product_name:"Incredible Steel Shirt",
        product_price:54,
        product_material:"Metal",
        product_color:"white"
    },
    {
        id:"15",
        product_name:"Ergonomic Cotton Hat",
        product_price:43,
        product_material:"Rubber",
        product_color:"mint green"
    },
    {
        id:"16",
        product_name:"Small Soft Chair",
        product_price:47,
        product_material:"Cotton",
        product_color:"teal"
    },
    {
        id:"17",
        product_name:"Incredible Metal Car",
        product_price:36,
        product_material:"Fresh",
        product_color:"indigo"
    },
    {
        id:"18",
        product_name:"Licensed Plastic Bacon",
        product_price:88,
        product_material:"Steel",
        product_color:"yellow"
    },
    {
        id:"19",
        product_name:"Intelligent Cotton Chips",
        product_price:46,
        product_material:"Soft",
        product_color:"azure"
    },
    {
        id:"20",
        product_name:"Handcrafted Wooden Bacon",
        product_price:36,
        product_material:"Concrete",
        product_color:"lime"
    },
    {
        id:"21",
        product_name:"Unbranded Granite Chicken",
        product_price:90,
        product_material:"Metal",
        product_color:"gold"
    },
    {
        id:"22",
        product_name:"Ergonomic Soft Hat",
        product_price:99,
        product_material:"Rubber",
        product_color:"black"
    },
    {
        id:"23",
        product_name:"Intelligent Steel Pizza",
        product_price:95,
        product_material:"Cotton",
        product_color:"azure"
    },
    {
        id:"24",
        product_name:"Tasty Rubber Cheese",
        product_price:47,
        product_material:"Frozen",
        product_color:"orchid"
    },
    {
        id:"25",
        product_name:"Licensed Steel Car",
        product_price:20,
        product_material:"Cotton",
        product_color:"indigo"
    }
]

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}✨✨✨`)
});

app.get("/products", function (req,res){
    res.send(products);
});

//Find all the information about each products
products.forEach(product => {
    console.log(`
    Product Name: ${product.product_name}, 
    Product Price: ${product.product_price}, 
    Product Material: ${product.product_material}, 
    Product Color: ${product.product_color}`);
});

//Find the product price which are between 400 to 800
const priceFilter = products.filter(product => product.product_price >= 400 && product.product_price <= 800);

console.log("Product price which are between 400 to 800:");
priceFilter.forEach(product => console.log(product.product_price));

//Find the product price which are not between 400 to 600
const priceFilterNotBetween = products.filter(product => product.product_price < 400 || product.product_price > 600);

console.log("Product price which are not between 400 to 600:");
priceFilterNotBetween.forEach(product => console.log(product.product_price));

//List the four product which are grater than 500 in price
const priceGreaterThan500 = products.filter(product => product.product_price > 500);

console.log("Four products which are grater than 500 in price:");
priceGreaterThan500.slice(0, 4).forEach(product => console.log(product.product_name));

//Find the product name and product material of each products
products.forEach(product => {
    console.log(`
    Product Name: ${product.product_name}, 
    Product Material: ${product.product_material}
    `);
});

//Find the product with a row id of 10
const productId10 = products.find(product => product.id === "10");

console.log(`Product with row id of 10: ${productId10.product_name}`);

//Find only the product name and product material
products.forEach(product => {
    console.log(`
    Product Name: ${product.product_name}, 
    Product Material: ${product.product_material}
    `);
});

//Find all products which contain the value of soft in product material
const productSoft = products.filter(product => product.product_material.includes("soft"));

console.log("Products which contain the value of soft in product material:");
productSoft.forEach(product => console.log(product.product_name));

//Find products which contain product color indigo  and product price 492.00
const productIndigoPrice492 = products.find(product => product.product_color === "indigo" && product.product_price === 492);

console.log(`Product which contain product color indigo and product price 492.00: ${productIndigoPrice492.product_name}`);

//Delete the products which product price value are same 
const uniqueProductPrice = [...new Set(products.map(product => product.product_price))];
const uniqueProducts = [];

uniqueProductPrice.forEach(price => {
    const product = products.find(product => product.product_price === price);
    uniqueProducts.push(product);
});

console.log("Products after deleting the products with same product price value:");
uniqueProducts.forEach(product => console.log(product.product_name));

app.use(express.json());
app.use(cors());