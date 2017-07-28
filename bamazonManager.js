var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
});

//display produts
var displayInventory = function() {
  connection.query("SELECT * FROM product", function(err,res){
    console.log("BAMAZON \n Products available ");
  console.table(res);
  });

};

var optionList = [
 {
    name: "option",
    type: "list",
    message: "LIST OF OPTIONS -- Please Select One --: \n",
    choices: ["View Products for Sale","View Low Inventory", "Add to Inventory", "Add New Product"]
  }
];  

// should start like a menu 
function start() 
{
  inquirer.prompt(optionList).then(function(userchoice)
  {
    switch(userchoice.option){
      case "View Products for Sale":
      viewSales();
      break;

      case "View Low Inventory":
      lowInventory();
      break;

      case "Add to Inventory":
      break;

      case "Add New Product":
      createProduct();
      break;
  }
});
} // end of start 





var viewSales = function() {  

connection.query( "SELECT product_name,  price, stock_quantity FROM product", function(err,res)
  {
    console.log("\n Products available ");
    console.table(res);
  });
}

// display low inventory 
var lowInventory = function() {  

connection.query( "SELECT product_name, stock_quantity FROM product WHERE stock_quantity < 5", function(err,res)
  {
    console.log("\n Low Inventory Items: ");
    console.table(res);
  });
}

var createProduct  = function(){
  console.log("Inserting a new product...\n");
  var query = connection.query(
        "INSERT INTO products SET ?",
    {
      item_id:"",
      product_name:"",
      department_name: "",
      price:"",
      stock_quantity:""
    },function(err, res) {
          console.table(res);
          updateProduct();
      }
    );
  //logs the actual querty being run
   console.table(query.sql);
}//end of createProduct 

function updateProduct(){
  console.log("Updating BAMAZON Inventory\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {

      }
    ],function(err, res) {
  
      console.table (res + " products updated!\n");
    }
  );
}//end of updateProduct


displayInventory();
start();

           
           
             
