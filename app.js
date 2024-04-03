// let btn=document.querySelectorAll("button");
// console.dir(btn);


// for(btns of btn){
    // btns.onclick = sayhello;
    // btns.onclick=sayname;

    // btns.addEventListener("click",sayhello);
    // btns.addEventListener("click",sayname);
    // btns.addEventListener("dblclick",function(){
    //     console.log("you double clicked me");
    // })

// btn.onmouseenter=function(){
//     console.log("button was clicked");
// };

// }
// function sayhello(){
//     alert("hello");
// }
// function sayname(){
//     alert("name");
// }

//random color generator

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    console.log("random color generated");

    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
    
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}