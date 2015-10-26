// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
Returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.

*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

//Push the nodes with matching classes here. 
  var elementList = [];

  
  //This function is used to find the target class on each node and add the element to the elementList array.
  var findElement = function(object, searchClass) {
      
    //Iterating through the child element nodes of the passed in object.
    for (var i = 0; i < object.children.length; i++) {
      
      //Using a recursive call to search the children of the children.
      findElement(object.children[i], className);        
	    
	    //If the node has a classlist array, then compare each value to the target passed in.
	    if (object.children[i].classList.length > 0) {
	    	
	    	//Iterating through the classlist array.
		    for (var j = 0; j < object.children[i].classList.length; j++) {

		        //This variable references each value in the classList array.
		        var objClass = object.children[i].classList[j];

		        //If the value = the passed in target, the element is pushed to the elementList array.
		        if (objClass === className) {
		          var elem = object.children[i];

		          //Unshifting to matching the array order in the spec test.
		          elementList.unshift(elem);
		        }
		      }
	    }
    }
  };
    findElement(document, className);

    return elementList;
  };

		



