let a=document.querySelector(".btn")
a.style.color='white';
let c= document.querySelector(".container")
let d= document.querySelector(".label")
let b= document.body;
// b.style.backgroundColor="black"
// a.addEventListener=("click",()=>{
//     console.log("hello")
//     b.style.backgroundColor="black";
// });
let toggle=()=>{
    if(b.style.backgroundColor !="black"){
        b.style.backgroundColor ="black"
        a.innerText="Light mode"
        a.style.backgroundColor="white"
        a.style.color="black"
        d.style.color="white"
    }
    else if(b.style.backgroundColor ="black"){
        b.style.backgroundColor="white"
        a.innerText="Dark mode"
        a.style.backgroundColor="black"
        a.style.color="white"
        d.style.color="black"


        
    }
}
//  drk=()=>{
//     b.style.backgroundColor="black"
//     a.innerText="Light"
//     a.style.backgroundColor="pink"}
// lgt=()=>{
//     b.style.backgroundColor="white"
//     a.innerText="Dark"
// }

let inp= document.querySelector(".txt")
let ser= document.querySelector(".search")

let getImage=()=>{
    console.log("hii")
    // c.style.backgroundColor="blue"
    c.style.display="none"
    let i= document.createElement("img")
    i.className="image"
    let val = inp.value
    i.setAttribute("src", val)
    document.body.appendChild(i)

    
}