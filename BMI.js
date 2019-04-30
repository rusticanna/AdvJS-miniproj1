// take the input from the form and display the results
function calculateBMI() {
   var weightNode = document.getElementById("weight");
   var heightNode = document.getElementById("height");
   var weight = weightNode.value;
   var height = heightNode.value;
   var bmi = weight / (Math.pow(height,2)); //NOTE: the ^ operator is a logical XOR, and the ** is available in all browsers except IE
   var bmiDescription;
   if (bmi <= 18.5) {
      bmiDescription = "underweight"
   } else if (bmi <= 24.9) {
      bmiDescription = "normal"
   } else if (bmi <= 29.9) {
      bmiDescription = "overweight"
   } else {
      bmiDescription = "obese"
   }
   document.getElementById("results").innerHTML = 
   "<p>" +
   "Based on your weight of " + weight + 
   " and your height of " + height +
   ", your Body Mass Index (BMI) is: <b>" + bmi.toFixed(1) + " (" + bmiDescription + ")<b/>." +
    "</p>";
}
// reset the fields of the screen by looping through all the 'input' nodes and resetting the 'results' node
function resetScreen() {
   var inputFields = document.querySelectorAll("input");
   for (var i = 0; i < inputFields.length; i++) {
      inputFields[i].value = null;
   }
   document.getElementById("results").innerHTML = "<p></p>"
}