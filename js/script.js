
// get and save elements with a class of box
const boxes = document.getElementsByClassName('box');

// create a function that generates random numbers
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

// iterate through the array of elements that were 
// previously given a class of box, and assign a 
// handler to the onclick property of each element 
// in the array
for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = bgChange;
}


// onclick event calls bgChange and bgChange
// calls the random number function assigning the returned 
// random rgb values to a variable.
// assign the values inside that variable to the background
// color of the event object
function bgChange(e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
}  
