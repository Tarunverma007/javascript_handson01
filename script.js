let a= document.getElementById("text");
console.log(a);
let b= document.getElementById("text").style.backgroundColor="pink"
console.log(b);
let second= document.getElementsByTagName("h1");
console.log(second);
let third=document.getElementsByClassName("box")
console.log(third)
let context= document.getElementsByClassName("context");


function ChangeMe(){
        context[0].innerHTML="Hello World";
}
let count =0;
context[0].addEventListener('click',() =>{
  
        // 
        if(count%2===0){
            context[0].innerHTML="Hello World"
            context[0].style.color="lightgreen"
            
            count++;

        }else{
            context[0].innerHTML="Hello";
            context[0].style.color="black"
           
}})
let changing=document.getElementById("heading1")
function ClickHere(){
    changing.innerText="Welcome To Elevation Academy";

}
let sixth= document.getElementById("heading");

    sixth.style.color="red";
// let win_doc=[
//     {Window:"It represents a browser window or frame that displays the contents of the webpage.",
//     Document:"It represents any HTML document or web page that is loaded in the browser"}
//     { Window:"It is the very first object that is loaded in the browser.",
//      Document:"It is loaded inside the window."}
//     {Window:"It is the object of the browser.",
//       Document:"It is the object of window property."}
//     {Window:"Global objects, functions, and variables of JavaScript are members of the window object",
//      Document:"All the tags, elements with attributes in HTML are part of the document"
//     }
// ];
// function generateTableHead(table){
//     let thead=table.createTHead();
// }
// let table =document.querySelector("table");
// generateTableHead(table);
// function generateTableHead(table)
// {
//     let thead=table.createTHead();
//     let row= thead.insertRow();
    
// }

let parent=document.querySelector('.parent')
let flag= true;
function changeDirection(){
    if(flag){
        parent.style.display='block'

    flag=false;
    }else{
        parent.style.display='flex'
        flag=true;
    }
    
    
}
let display=document.getElementsByClassName('clocks')
display[0].addEventListener('click', ()=>{
    function StartClock(){
        let time=new Date();
    let hrs= time.getHours();
    let mins= time.getMinutes();
    let secs=time.getSeconds();
    let AMPM="AM"
    if(hrs>12){
        hrs=hrs-12;
        AMPM="PM"
    }

    console.log(`Time:${hrs}:${mins}:${secs}`);
    display[1].innerHTML=`${hrs}:${mins}:${secs}`
    }
    setInterval(() =>{
        StartClock();
        console.log('hello Tarun');
    },1000)
})


var btn4 =document.getElementById('btn4');
var btn5= document.getElementById('btn5');
var output=document.getElementsByClassName('margins');
var randomNumber =Math.ceil(Math.random()*100+1);

function CheckNumber(){
    var input= document.getElementById('input1'.value);
    if(input==randomNumber){
        output.innerHTML=`Your guessed is right, Number is ${randomNumber}`
        // output.style.color="pink";
    }
    else if(input> randomNumber){
        output.innerHTML=`Your Guess is Too High`;
        // output.style.color="red";

    }
    else if(input< randomNumber){
        output.innerHTML=`Your Guess is Low`;
        // output.style.color="red";
    }
    else if(input< 1){
        output.innerHTML=`Higher, it hass to be between 1 and 100`;

    }
    else if(isNaN(input)){
        output.innerHTML=   `That is not a Number`;
    }
    else{
        output.innerHTML=`Lower , it has to be between 1 an 100`;
    }

}
btn4.addEventListener('click',CheckNumber());
btn5.addEventListener('click', function(){
    location.reload();
})

// console.log(randomNumber);
// let chances=100;
// function CheckNumber(){
//     console.log(inputValue.value);
//     if(randomNumber>inputValue.value)
//     {
//         console.log("Your Guess is Low");
//         chances--;
//         console.log(chances);
//     }
//     else if(randomNumber<inputValue.value)
//     {
//         console.log("Your Guess is High");
//         chances--;
//         console.log(chances);
//     }
//     else{
//         console.log("Your Guess is right");
//         chances--;
//         console.log(chances);
//     }
// }