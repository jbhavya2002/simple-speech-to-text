const btn = document.getElementById("btn");  
 const results = document.getElementById("result");  
 const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;  
 const recognition = new speechRecognition();  
 recognition.onstart = function(){  
   console.log("you can speek now");  
 }  
 recognition.onresult = function(event){  
   var text = event.results[0][0].transcript;  
   console.log(text);  
   document.getElementById("result").innerHTML = text;  
 }













 
