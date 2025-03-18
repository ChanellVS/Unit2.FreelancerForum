console.dir(document)

const freelancers = [
        {name: "Alice" , 
        occupation: "Writer" , 
        price: "30"},
        {name: "Bob", 
        occupation: "Teacher", 
        price: "50"},
];


// const newFree =[
//     {name: 'Carol' , occupation: "Programmer" , price: "70"},

// ]

const arrNam = [
    "Phil", 'Jess'
]

const arrJobs = [
    "Doctor", 'Rocket Scientist'
]

console.dir(freelancers)

const root = document.querySelector('#root')
console.log(root)

const body = document.querySelector('body');
body.style.textAlign = "center";


// --------------------------------------------------------------
const title = document.createElement("header");
title.innerHTML = "<h1>Freelance Forum</h1>";
root.append(title);
console.dir(title)
// -------------------------------------------------------------------------------------
const par = document.createElement("p");
par.id = "paragraph";
console.log(par)
par.innerHTML = "";
root.append(par);
par.style.border = "1px, solid, black";


// -------------------------------------------------------------------------------------
const title2 =document.createElement("h2");
title2.innerHTML = "Available Freelancers";
par.append(title2);
console.log(par);
// -------------------------------------------------------------------------------------
const div = document.createElement("div");
div.id ="start"
div.innerHTML = "<span id='person'><strong>Name</strong></span> <span id='job'><strong>Occupation</strong></span> <span id='strPri'><strong>Price</strong></span>";
par.append(div);

// renderPeo()
// -----------------------------------------------------------------------------

const person = document.querySelector('#person');
person.style.marginInline = "25px";
person.style.fontSize = "20px"

const job = document.querySelector('#job');
job.style.marginInline = "25px";
job.style.fontSize = "20px"

// -------------------------------------------------------------------------------------
const strPri = document.querySelector('#strPri');
strPri.style.marginInline = "25px";
strPri.style.fontSize = "20px"
// -------------------------------------------------------------------------------------
function average (){
const sum = freelancers.reduce((acc, curr) => parseInt(acc) + parseInt(curr.price), 0);
const priceAve = sum / freelancers.length
return (priceAve).toFixed(2)
}

function renderAve(){
    const aveDiv = document.getElementById("average");
    if(aveDiv){
        aveDiv.innerHTML = `<h2>The average starting price: ${average()} </h2>`;
    } else{
    const div2 = document.createElement("div");
    div2.id = "average";
    div2.innerHTML = `<h2>The average starting price: ${average()} </h2>`;
    par.append(div2);
    }
    }

function renderPeo(){
    const start = document.getElementById('start');
    start.innerHTML = "<span id='person'><strong>Name</strong></span> <span id='job'><strong>Occupation</strong></span> <span id='strPri'><strong>Price</strong></span>";


    freelancers.forEach((e)=>{
       const cont1 = document.querySelector('#person')
       const namDiv = document.createElement("div");
       namDiv.classList.add("people");
       namDiv.innerHTML = `${e.name}`;
       cont1.append(namDiv);
    
       const cont2 = document.querySelector('#job')
       const ocDiv = document.createElement("div");
       ocDiv.classList.add("occ");
       ocDiv.innerHTML = `${e.occupation}`;
       cont2.append(ocDiv);
    
       const cont3 = document.querySelector('#strPri')
       const prDiv = document.createElement("div");
       prDiv.classList.add("startPrice");
       prDiv.innerHTML = `${e.price}`;
       cont3.append(prDiv);
    
       cont1.style.display= "inline-block";
       cont2.style.display= "inline-block";
       cont3.style.display= "inline-block";
       
    })
   renderAve()
    }

    // function addCarol(){
    //     for(let i =0; i< newFree.length; i++){
    //         const carolPer = newFree[i];
    //         return freelancers.push(carolPer)
            
    //     }
    // }

function randomFree(){
    const name = arrNam[Math.round(Math.random() * (arrNam.length - 1))];
    const job = arrJobs[Math.round(Math.random() * (arrJobs.length - 1))];
    const ranPrice = `${Math.round(Math.random() * 100)}`;
    return {name, occupation: job, price: ranPrice}
}
 





function renderNewPeo(){
   freelancers.push(randomFree());
   renderPeo()
}
renderPeo()







const add = setInterval(renderNewPeo, 5000)

setTimeout(()=>{
  clearInterval(add)
}, 30000)






// par.innerHTML = "<span>Name</span> <span>Occupation</span> <span>Price</span>";
// par.innerHTML = "<span>Occupation</span>";
// par.innerHTML = "<span>Price</span>";

