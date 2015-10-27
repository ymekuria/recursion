// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

  var addToString = function(objToString) {
    //console.log("test object directly inside addToString: ", objToString, "objToString.length: ", objToString.length = true)
        
        //This conditinal tests if the passed in argument is an Array


        if(Array.isArray(objToString)) {
          objString += "[";
          
          //If so, iterate through the array and recursively call the addtoString on each value         
          _.each(objToString, function(arrValue, index) {
            //objString += (keyInValue+":")

            console.log("objString value inside of each for Object conditional: ", arrValue, "value type inside of each: ", typeof arrValue )
            addToString(arrValue);
          });
          
         
          //This deletes the last comma after the last stringified element in a collection. 
          objString.charAt(objString.length-1) === "," ? objString = objString.slice(0, - 1) : objString;
          
          objString += "],";
        }

        //If the passed in argument is a string, add it to the objString.
        else if(typeof objToString === "string") {
          //Escape the string
           objString += objString;

        }
        
        //If the is converted to a string and added to the objString if it's a number, boolean, or null.
        else if(typeof objToString === "boolean" || typeof objToString ===  "number" || typeof objToString === null) {
          console.log
          //objString += objToString.toString();
          objString = objString.concat(objToString.toString(),",");
        }
        
        //If the argument is an object that isn't an array.
        else if(typeof objToString === "object" && !Array.isArray(objToString)) {
          objString += "{";
          _.each(objToString, function(objValue, key) {

            //Each key is added to the objString and the value is passed in to the addToString function.
            objString += (key+":")
            console.log('key inside of object _.each: ', key, 'objValue: ', objValue);
            addToString(objValue);
          });
          objString += "}";
        }
   
  };      
  
  //Initially invoking addToString with the obj passed into the stringify function.
  addToString(obj);

  //This deletes the last comma after the closing bracket. 
  objString.charAt(objString.length-1) === "," ? objString = objString.slice(0, - 1) : objString;
        
  return objString;       

};

//console.log(stringifyJSON({yoni:"test",num:123}));