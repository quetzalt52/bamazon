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

var optionList = [
 {
    name: "option",
    type: "list",
    message: "LIST OF OPTIONS -- Please Select One --: \n",
    choices: ["PURCHASE", "EXIT"]
  }
];  

function main() {
  inquirer.prompt(optionList).then(function(userchoice1)
  {
    switch(userchoice1.option){
      case "PURCHASE":
        displayInventory();
        makePurchase();

      break;

      case "EXIT":
        console.log("Thank you for visiting BAMAZON");
        
      break;
    }//end of inquirer
  });
}//end of main 



//display produts
var displayInventory = function() {

  connection.query("SELECT * FROM product", function(err,res)
  {
    console.log("BAMAZON \n Products available ");
    console.table(res);
  });
  console.log("");
  //search();
};


var makePurchase = function() {
  inquirer.prompt([
  {
      name: "id",
      type: "input", 
      message: "Enter the Item ID of the product you would like to buy?"
     
  }, {
      name:"quantity",
      type: "input",
      message:"Enter how many items would like to purchase?"
      
    
    }]).then(function(answer)
    {
      connection.query('SELECT product_name, price, stock_quantity FROM product', function(err,res)
      {
        console.log("\nNumber of Items you would like to buy : " + answer.quantity);
          console.log(res[0].stock_quantity , "value of stock_quantity");
          if (res[0].stock_quantity >= answer.quantity) {

            var availableItems = res[0].stock_quantity - answer.quantity;

            connection.query('UPDATE product set ? where ?', 
            [{
              stock_quantity: availableItems
            }, {
              item_id: answer.id
            }], function(err, res) {});
            var cost = res[0].price * answer.quantity;
            console.log("\n Order was successfully completed  $" + cost);
            displayInventory();
           
        } else {
          console.log("Sorry, Insufficient quantity!");
            
        }//end of else 
        })//end function
      });
  }//end of makepurchase 

  
displayInventory();
//search();
main();
           
           
             
