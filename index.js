const incrementBtn = document.getElementById("increment");
const saveBtn = document.getElementById("save");
const sumBtn = document.getElementById("sum");
const counter = document.getElementById("counter");
const entries = document.getElementById("entries");

let count = 0;
let sumNr = 0; 

saveBtn.classList.toggle("dissapear"); 
incrementBtn.classList.toggle("dissapear"); 

function increment() {
    count += 1;
    sumNr += 1; 
    counter.textContent = count;
}

function save() {
    entries.textContent = entries.textContent + counter.textContent + " - ";
    count = 0;
    counter.textContent = 0;
}

sumClickCounter = 0; 

function sum() {
    if (sumClickCounter === 0) {

        counter.textContent = sumNr; 
        entries.textContent = entries.textContent.substring(18, entries.textContent.length-2); 
        sumBtn.classList.toggle("sum"); 
        sumBtn.textContent = "RESET"; 
        sumClickCounter += 1; 

        saveBtn.classList.toggle("dissapear"); 
        incrementBtn.classList.toggle("dissapear"); 
    }
    else {
        sumBtn.classList.toggle("sum"); 
        sumBtn.textContent = "SUM"; 
        sumClickCounter = 0; 

        counter.textContent = 0; 
        count = 0; 
        sumNr = 0; 
        entries.textContent = "Previous Entries: "

        saveBtn.classList.toggle("dissapear"); 
        incrementBtn.classList.toggle("dissapear"); 
    }
}
