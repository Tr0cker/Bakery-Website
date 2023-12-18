// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}





// Get the modal 2
var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}





// Get the modal 3
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modal3.style.display = "none";
}





// Get the modal 4
var modal4 = document.getElementById('myModal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById('myImg4');
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
  modal4.style.display = "none";
}










//code for contact form
// Here the value is stored in new variable x 
function ContactForm() {
  var user_input = {};
  user_input[0] = document.getElementById("myText").value;
  user_input[1] = document.getElementById("myText2").value;
  user_input[2] = document.getElementById("myText3").value;
  user_input[3] = document.getElementById("myText4").value;

  if((isEmail(user_input[1])) && (isPhoneNumber(user_input[2]))){
    document.getElementById("result_name").innerHTML = user_input[0];
    document.getElementById("result_email").innerHTML = user_input[1];
    document.getElementById("result_phone_number").innerHTML = user_input[2];
    document.getElementById("result_feedback").innerHTML = user_input[3];
  }
  else{
    alert("Hey, Please make sure your phone number or email format is correct");
  }
}



//check if a user input is email
function isEmail(input) {
  // Define a regular expression to match the format of an email address
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // Use the match() method to check if the input matches the regular expression
  return input.match(emailRegex);
}



// check if a user input is phone number
function isPhoneNumber(input) {
  // Define a regular expression to match the format of a phone number
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  // Use the match() method to check if the input matches the regular expression
  return input.match(phoneRegex);
}





















// js code for shopping cart
function AddToCart_One() {
  
  //get info from item
  var name_one = document.getElementById("name_one").textContent;
  var price_one = document.getElementById("price_one").textContent;
  var quantity_one = document.getElementById("number-select_one");

  // alert(typeof price_one);
  //extract the number
  var price_number = price_one.match(/\d+\.\d+|\d+/g);
  //extract the name
  var name_one_extract = name_one.replace('Name: ','');
  //extract the number of select tag
  var select_one_value = quantity_one.value;

  //append html code the shopping cart by using insert function
  // const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  //check if the item is already in the shopping cart
  if(check_if_exist(name_one_extract)){
    Add_HTML_Code_exist(name_one_extract, select_one_value);
    //alert("I am an alert box!");
    calculate_total_price();
  }
  else{
    Add_HTML_Code_not_exist_one(name_one_extract, price_number, select_one_value);
    calculate_total_price();
  }

}





function AddToCart_Two() {
  //get info from item
  var name_two = document.getElementById("name_two").textContent;
  var price_two = document.getElementById("price_two").textContent;
  var quantity_two = document.getElementById("number-select_two");

  // alert(typeof price_one);
  //extract the number
  var price_number = price_two.match(/\d+\.\d+|\d+/g);
  //extract the name
  var name_two_extract = name_two.replace('Name: ','');
  //extract the number of select tag
  var select_two_value = quantity_two.value;

  //append html code the shopping cart by using insert function
  const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  //check if the item is already in the shopping cart
  if(check_if_exist(name_two_extract)){
    Add_HTML_Code_exist(name_two_extract, select_two_value);
    //alert("I am an alert box!");
    calculate_total_price();
  }
  else{
    Add_HTML_Code_not_exist_two(name_two_extract, price_number, select_two_value);
    calculate_total_price();
  }
}





function AddToCart_Three() {
  //get info from item
  var name_three = document.getElementById("name_three").textContent;
  var price_three = document.getElementById("price_three").textContent;
  var quantity_three = document.getElementById("number-select_three");

  // alert(typeof price_one);
  //extract the number
  var price_number = price_three.match(/\d+\.\d+|\d+/g);
  //extract the name
  var name_three_extract = name_three.replace('Name: ','');
  //extract the number of select tag
  var select_three_value = quantity_three.value;

  //append html code the shopping cart by using insert function
  // const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  //check if the item is already in the shopping cart
  if(check_if_exist(name_three_extract)){
    Add_HTML_Code_exist(name_three_extract, select_three_value);
    //alert("I am an alert box!");
    calculate_total_price();
  }
  else{
    Add_HTML_Code_not_exist_three(name_three_extract, price_number, select_three_value);
    calculate_total_price();
  }
}





function AddToCart_Four() {
  //get info from item
  var name_four = document.getElementById("name_four").textContent;
  var price_four = document.getElementById("price_four").textContent;
  var quantity_four = document.getElementById("number-select_four");

  // alert(typeof price_one);
  //extract the number
  var price_number = price_four.match(/\d+\.\d+|\d+/g);
  //extract the name
  var name_four_extract = name_four.replace('Name: ','');
  //extract the number of select tag
  var select_four_value = quantity_four.value;

  //append html code the shopping cart by using insert function
  // const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  //check if the item is already in the shopping cart
  if(check_if_exist(name_four_extract)){
    Add_HTML_Code_exist(name_four_extract, select_four_value);
    //alert("I am an alert box!");
    calculate_total_price();
  }
  else{
    Add_HTML_Code_not_exist_four(name_four_extract, price_number, select_four_value);
    calculate_total_price();
  }
}





// check if the item is already exist in the shopping cart
function check_if_exist(string_name_input){
  //check if there is anything in the cart
  var true_false;
  if (document.querySelector('.cart-item')) {
    // there is item in the cart
    var name_elements = document.querySelectorAll('.item-details h2');
    for (var i = 0; i < name_elements.length; i++) {
      var name = name_elements[i].textContent.replace('Name: ','');
      if(string_name_input == name){
        true_false = true;
      }
    }
  } else {
    // there is no item in the cart
    true_false = false;
  }
  return true_false;
}



//update html code if the item is in the shopping cart
function Add_HTML_Code_not_exist_one(string_name, string_price, string_quantity){
  //append html code the shopping cart by using insert function
  const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  let html_insert = `<div class="cart-item">
                  <img src="image/chocolate-chip-cookie-16.jpg" alt="Product">
                  <div class="item-details">
                    <h2>${string_name}</h2>
                    <p>Price: ${string_price}</p>
                    <p>Quantity: ${string_quantity}</p>
                  </div>
                </div>`;

  shopping_cart.insertAdjacentHTML("afterend", html_insert);
}



//update html code if the item is in the shopping cart
function Add_HTML_Code_not_exist_two(string_name, string_price, string_quantity){
  //append html code the shopping cart by using insert function
  const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  let html_insert = `<div class="cart-item">
                  <img src="image/Dorayaki-recipe-red-bean.jpg" alt="Product">
                  <div class="item-details">
                    <h2>${string_name}</h2>
                    <p>Price: ${string_price}</p>
                    <p>Quantity: ${string_quantity}</p>
                  </div>
                </div>`;

  shopping_cart.insertAdjacentHTML("afterend", html_insert);
}



//update html code if the item is in the shopping cart
function Add_HTML_Code_not_exist_three(string_name, string_price, string_quantity){
  //append html code the shopping cart by using insert function
  const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  let html_insert = `<div class="cart-item">
                  <img src="image/mango_cake.jpg" alt="Product">
                  <div class="item-details">
                    <h2>${string_name}</h2>
                    <p>Price: ${string_price}</p>
                    <p>Quantity: ${string_quantity}</p>
                  </div>
                </div>`;

  shopping_cart.insertAdjacentHTML("afterend", html_insert);
}



//update html code if the item is in the shopping cart
function Add_HTML_Code_not_exist_four(string_name, string_price, string_quantity){
  //append html code the shopping cart by using insert function
  const shopping_cart = document.getElementById("cart-items"); // specify the id of the element to insert into

  let html_insert = `<div class="cart-item">
                  <img src="image/Strawberry-Cake-S1.jpg" alt="Product">
                  <div class="item-details">
                    <h2>${string_name}</h2>
                    <p>Price: ${string_price}</p>
                    <p>Quantity: ${string_quantity}</p>
                  </div>
                </div>`;

  shopping_cart.insertAdjacentHTML("afterend", html_insert);
}



// update html code if the item is not in shopping cart
function Add_HTML_Code_exist(string_name, string_quantity){
  //find the element
  var name_elements = document.querySelectorAll('.item-details h2');
  var Quantity_elements = document.querySelectorAll('.item-details p');
  for (var i = 0; i < name_elements.length; i++) {
    var name = name_elements[i].textContent.replace('Name: ','');
    if(string_name == name){
      var index_of_quantity = ((i+1)*2)-1;
    }
  }
  var current_number = Quantity_elements[index_of_quantity].textContent.replace('Quantity: ','');
  var new_number = parseInt(current_number) + parseInt(string_quantity);
  Quantity_elements[index_of_quantity].textContent = "Quantity: " + new_number.toString();
}



function calculate_total_price(){
  var quantity_and_price = document.querySelectorAll('.item-details p');
  var total_price = 0;
  for (var i = 0; i < quantity_and_price.length; i += 2) {
    var first_number = parseInt(quantity_and_price[i].textContent.replace('Price: ',''));
    var second_number = parseInt(quantity_and_price[i+1].textContent.replace('Quantity: ',''));
    var result = first_number*second_number;
    total_price = total_price + result;
  }
  var total_price_check_out = document.querySelectorAll('.cart-total h2');
  total_price_check_out[0].textContent = "Total: " + "€" + total_price.toString();
}



function ClearItem(){

  var shopping_items = document.querySelectorAll('.cart-item');

  shopping_items.forEach(item => {
    item.parentNode.removeChild(item);
  });
  var total_price_check_out = document.querySelectorAll('.cart-total h2');
  total_price_check_out[0].textContent = "Total: €0";
}



// check out button
function CheckOutButton(){
  let elements = document.querySelectorAll('.shopping-cart');
  let content = "";
  elements.forEach(function(element) {
    content += element.textContent + "\n";
  });
  // check if there is anything in the shopping cart
  if (document.querySelector('.cart-item')) {
    // there is item in the cart
    // Set Item by using local storage
    localStorage.setItem("order", content);
    window.location.assign("checkout.html");
  }
  else{
    //nothing in the shopping cart
    alert("nothing in the shopping cart");
  }
}




















// validation code for checkout form
function CheckOutForm(){
  // array to store all variables 
  var user_input = {};
  //get name input
  user_input[0] = document.getElementById("myText").value;
  //get eamil input
  user_input[1] = document.getElementById("myText2").value;
  //get phone number input
  user_input[2] = document.getElementById("myText3").value;
  //get Eircode input
  user_input[3] = document.getElementById("myText4").value;
  //get Address input
  user_input[4] = document.getElementById("myText5").value;

  //bool variable for variables
  var bool_array = {}; 
  bool_array[0] = Boolean(isEmail(user_input[1]));
  bool_array[1] = Boolean(isPhoneNumber(user_input[2]));
  bool_array[2] = Boolean(isValidEircode(user_input[3]))

  //Retrieve order info by using localStorage
  document.getElementById("dispaly_order").innerHTML = localStorage.getItem("order");
  //variable for output
  var array_ids = ["dispaly_name", "dispaly_email", "dispaly_phone", "dispaly_eircode", "dispaly_address"];
  // if all variables are valid
  if((bool_array[0] && bool_array[1]) && bool_array[2]){
    for (var index = 0; index < array_ids.length; index++) {
      document.getElementById(array_ids[index]).innerHTML = "<p>" + user_input[index] + "</p>";
    }
    alert("Your Order Has been placed");
  }
  else{
    alert("invalid input, Please follow the correct format.");
  }

}



function isValidEircode(str) {
  // Check if the string has 7 characters
  if (str.length !== 7) {
    return false;
  }

  // Check if the first character is a letter
  if (!/[a-zA-Z]/.test(str.charAt(0))) {
    return false;
  }

  // Check if the string only contains letters and numbers
  if (!/^[a-zA-Z0-9]*$/.test(str)) {
    return false;
  }

  return true;
}