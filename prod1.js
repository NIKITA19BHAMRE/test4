var express = require('express');
var app = express();


//Reusable controllers
var productController=function (req, res) {
  console.log("CAlling rest api");
  var products=[
            {Name:'Shirts',category:"clothes",price:'2000',quantity:200},
			{Name:'Shoes',category:"Footwear",price:'4000',quantity:150},
			{Name:'Lays',category:"Fooditems",price:'200',quantity:20},
			{Name:'Samsung',category:"Mobiles",price:'20000',quantity:2}
            
      ];
	    res.send(products);
};
	  var customerController=function (req, res){
	   var customers=[
            {id:101,Name:'abc',email:'abc@gmail',password:"123"}
			
        		
      ];
	  res.send(customers);
	  };
	  
	   var employeeController=function (req, res){
	   var leaveemployees=[
            {empid:1,Name:'xyz',email:'xyz@gmail',password:"1234"}
            
      ];

   
    res.send(leaveemployees);
};

// setting router to map requests  with controllers

app.get('/products',productController );
app.get('/customers',customerController );
app.get('/employee',employeeController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})