// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function ( input ){  
    // your code here
      var lrg = 0;
      for(var i = 0; i < input.length; i++){
          if (input[i] > lrg){
              lrg = input[i];
          }
      }
      return lrg;
  },
  
  reversed: function(string){  
    // your code here
      var splitString = string.split("");
      var reverse = splitString.reverse();
      var joinIt = reverse.join("");
      return joinIt;
  },

  loudSnakeCase: function(string){  
    // your code here
     /* var splitString = string.split("");
      for(var i=0;i < splitString.length;i++){
          if (splitString[i] === " "){
              splitString[i] = "_";
              splitString[i + 1].toUpperCase();
          };
      };
      var joinIt = splitString.join("");
      return joinIt;*/
      
      var farr = [];
      var splitString = string.split("");
      if(splitString[0] != " "){
          farr.push(splitString[0].toUpperCase());
      };
      for (var i=1; i < splitString.length; i++){
          if (splitString[i] ===" "){
              farr.push("_");
              if (splitString[i +1] === " "){
                i++;
              }else {
                farr.push(splitString[i + 1].toUpperCase());
                i++;
              };
          } else if (/^[a-zA-Z0-9]+$/.test(splitString[i])){
              farr.push(splitString[i]);
          }
      };
      var joinIt = farr.join("");
      return joinIt;
  },

  compareArrays: function(arr1,arr2){ 
    // your code here (replace the return)
      for (var i = 0; i<arr1.length;i++){
          if (arr1[i] === arr2[i]){
              stillTrue = true;
          }else {
              stillTrue = false;
              break;
          }
      }
      if (stillTrue){
            return true; 
      }else {
          return false;
      }
  },

  fizzBuzz: function(num){  
    // your code here
      var arr = [];
      for(i = 1; i < num + 1; i++){
          if (i % 3 === 0){
              if (i % 5 === 0){
                  arr.push("FIZZBUZZ");
              } else {
                  arr.push("FIZZ");
              };
          } else if (i % 5 === 0){
              arr.push("BUZZ");
          } else {
              arr.push(i);
          };
      };
      return arr;
  },

  myMap: function(arr, func){  
    // your code here
      var farr = [];
      for (var i = 0; i < arr.length; i++){
          farr.push(func(arr[i]));
      }
      return farr;
  },

  primes: function(num){  
    // your code here
      var arr = [];
      for (i = 2; i < num; i ++){
          var prime = true;
          for (j = 2; j < i; j++){
              if (i % j === 0){
                  prime = false;
              };
          };
          if (prime){
              arr.push(i);
          };
      };
      return arr;
  },
}