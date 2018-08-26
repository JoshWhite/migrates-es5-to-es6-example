// gloabl function :(
function myCoreFunction() {
    // do some stuff with side effects
}

var myNameSpace = (function() {
    var scopedVar = '<div>My name is Josh</div>'

    // scope reliant, non pure function
    var addMyNameToTheDOM = function() {
        $('body').append(scopedVar);
        myCoreFunction();
    }

    // pure function
//     var addOne = function(num) {
//         return num + 1;
//     }

    return {
        addMyNameToTheDOM: addMyNameToTheDOM,
//         addOne: addOne
    }
})()

//THIS IS WHERE THE MAGIC HAPPENS
myNameSpace = Object.assign(myUMDLibrary, myNameSpace)

myNameSpace.addOne(1) // 2 
myNameSpace.addMyNameToTheDOM() // lots of side effects
