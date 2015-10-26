// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  //An empty string that will be added to 
  var objString="";
  
  //This function that turns the key value pairs to a string and adds that string to the objString
  var addToString = function(objToString) {
    console.log("test object directly inside addToString: ", obj)
        
        //This conditinal tests if the passed in argument is an Array
        if(objToString.length && typeof objToString === "object") {
          objString += "[";
          
          //If so, iterate through the array and recursively call the addtoString on each value         
          _.each(objToString, function(value, index) {
            //objString += (keyInValue+":")

            console.log("objString value inside of each: ", value, "value type inside of each: ", typeof value )
            addToString(value);
          });
          objString += "]";
        }

        //If the passed in argument is a string, add it to the objString.
        if(typeof objToString === "string") {
          //Escape the string
           objString += value;

        }
        
        //If the is converted to a string and added to the objString if it's a number, boolean, or null.
        if(typeof objToString === "boolean" || typeof objToString ===  "number" || typeof objToString === null) {
          console.log
          objString += objToString.toString();
        }
        
        //If the argument is an object that isn't an array.
        if(typeof objToString === "object" && !objToString.length) {
          objString += "{";
          _.each(objToString, function(value, key) {

            //Each key is added to the objString and the value is passed in to the addToString function.
            objString += (key+":")
            addToString(value);
          });
          objString += "}";
        }
   
  };      
  
  //Initially invoking addToString with the obj passed into the stringify function.
  addToString(obj);

  return objString;       

};

//console.log(stringifyJSON({yoni:"test",num:123}));