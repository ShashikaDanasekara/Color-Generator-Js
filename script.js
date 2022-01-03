/* https://www.december.com/html/spec/colorsafecodes.html */

const colors = [
    "#000000",
    "#333333",
    "#666666",
    "#999999",
    "#CCCCCC",
    "#FFFFFF",
    "#996666",
    "#663333",
    "#CC9999",
    "#993333",
    "#CC6666",
    "#CC3333",
    "#330000",
    "#660000",
    "#990000",
    "#CC0000",
    "#FF0000",
    "#FF3333",
    "#FF6666",
    "#FF9999",
    "#FFCCCC",
    "#FF3300",
    "#CC3300",
    "#FF6633",
    "#CC6633",
    "#993300",
    "#FF9966",
    "#663300",
    "#CC6600",
    "#FF9933",
    "#FFCC99",
    "#FF9900",
    "#CC9933",
    "#996600",
    "#FFCC66",
    "#CC9900",
    "#FFCC33",
    "#FFCC00",

];

/** 
 * when the color and selecor is provided then 
 * this function should change the color and text of the block
 *
 * 1. take in the color and selector as text which is the span tag
 * 2. give similar-ish names for span tag and its parent div tag
 * 3. for span tag use innerTest property
 * 4. for div tag use style.background property
 */
function setColor(selector,color){
    document.querySelector("."+selector).innerText = color;
    document.querySelector("."+selector+"-container").style.backgroundColor = color;
}
setColor("value1","#A594F9");



/**
 * generate 5 random numbers which should be distict 
 * and using that extract elements from colors array
 * return those 5 numbers
 * 
 * 1. create an empty array 
 * 2. generate a random number 
 * 3. put the random number into a while loop and check if 
 * that number is already present in the array
 * 4. if present generate again else add to empty array
 */
function colorGenerator(){
    let randIndex = randomNumber(1, colors.length) -1;
    let indexSet = []
    while(indexSet.length < 5){
        if (!indexSet.includes(randIndex)){ // not found
            indexSet.push(randIndex);
        }
        else{
            randIndex = randomNumber(1, colors.length) -1;   
        }
        console.log("length of index set is :" + indexSet.length)
    }
    return indexSet;
}
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

/**
 * when the button is clicked all the colors should be genetated 
 * and sample colors should display on the screen
 * 
 * 1. listen to button click using a event listener
 * 2. generate indexes using colorGenerator() and set colours using setColor()
 */
document.getElementById("button").addEventListener('click',function(){
    let indexes = colorGenerator();
    for(let i=0;i<indexes.length;i++){
        let value = "value"+ (i+1);
        let color  = colors[indexes[i]];
        setColor(value,color);
    }
});

let indexes = colorGenerator();
for(let i=0;i<indexes.length;i++){
    console.log("index number is : "+indexes[i]);
    let value = "value"+ (i+1);
    let color  = colors[indexes[i]];
    setColor(value,color);
}

