let celsiusConvert;
let fahrenheitConvert;

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // TODO: Implement the conversion logic here
    celsius = parseFloat(celsius);
    celsiusConvert = ((celsius * 9/5) + 32).toFixed(2);
    return celsiusConvert;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    // TODO: Implement the conversion logic here
    fahrenheit = parseFloat(fahrenheit);
    fahrenheitConvert = ((fahrenheit -32) * 5/9);
    return fahrenheitConvert;


  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    // TODO: Call the celsiusToFahrenheit function and display the result
    alert(celsiusToFahrenheit(temperature));
  } else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    // TODO: Call the fahrenheitToCelsius function and display the result
    alert(fahrenheitConvert(temperature));
  } else {
    alert("Invalid conversion type.");
  }