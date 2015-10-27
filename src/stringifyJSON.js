// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  //This string will be returned with the stringified values. 
  var objString="";
  
    //This function turns the passed in arguments to a string and adds it to the objString.
    var addToString = function(objToString) {
      
      //This conditinal tests if the passed in argument is an Array.
      if (Array.isArray(objToString)) {
        objString += "[";
        
        //If so, iterate through the array and recursively call the addtoString on each value.         
        _.each(objToString, function(arrValue, index) {
          addToString(arrValue);
        });
        
        //This deletes the last comma after the last stringified element in a collection. 
        objString.charAt(objString.length-1) === "," ? objString = objString.slice(0, - 1) : objString;
        
        objString += "],";
      }

      //If the passed in argument is a string, add it to the objString.
      else if (typeof objToString === "string") {  
         objString += '"'+objToString+'",';
      }
      
      //If the argument is converted to a string and added to the objString if it's a number or boolean.
      else if (typeof objToString === "boolean" || typeof objToString ===  "number") {
        objString = objString.concat(objToString.toString(),",");
      }

      //If the argument is null, the string 'null' is addeded to the objString.
      else if (objToString === null) {
        objString+="null,";
      }

      //If the argument is an object that isn't an array.
      else if (typeof objToString === "object" && !Array.isArray(objToString)) {
        objString += "{";

        _.each(objToString, function(objValue, key) {
          
          //This conditional determines if the argument is stringyfiable (ie not undefined or a function). 
          if (typeof objValue !== 'function' && objValue !== undefined) {
           
          //Each key is added to the objString and the value is passed in to the addToString function.
          objString += ('"'+key+'":');
          
          addToString(objValue);
          }
        });

        //This deletes the last comma after the last stringified element in a collection.
        objString.charAt(objString.length-1) === "," ? objString = objString.slice(0, - 1) : objString;
        objString += "},";
      }
 
  };      
  
  //Initially invoking addToString with the obj passed into the stringify function.
  addToString(obj);

  //This deletes the last comma after the closing bracket. 
  objString.charAt(objString.length-1) === "," ? objString = objString.slice(0, - 1) : objString;
        
  return objString;       

};

//console.log(stringifyJSON({yoni:"test",num:123}));