var f = document.getElementById('fahrenheit');
var c = document.getElementById('celcius');


function converToCelcius(){
 c.value = (5/9)*(f.value-32);
};

function convertToFarenheit(){
 f.value = (c.value*9/5)+32;
};
