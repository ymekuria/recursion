// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
Returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.

*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  
    //Implement this function and add recurrsion
  var findElement = function(object, searchClass) {
	  //Iterating through the child nodes of the body.
	  console.log("this.document: ", document, "document.body, :", document.body);
	  
	  for (var i = 0;i < object.children.length; i++) {
	    
	    //if the node has a classlist, then compare each value to the target passed in.
	    if (document.body.children[i].classList.length > 0) {

	      for (var j = 0; j < object.children[i].classList.length; j++) {

	        //This variable references each value in the classList array.
	        var objClass = object.children[i].classList[j];

	        //If the value = the passed in target, the element is pushed to the elementList array.
	        if (objClass === className) {
	          var elem = object.children[i];
	          elementList.push(elem);
	        }
	      }
	    }
	  }
  };
  findElement(document.body, className);

  return elementList;
  };

		



