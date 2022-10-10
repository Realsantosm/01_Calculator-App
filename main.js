// Input sections
const firstInp = document.querySelector("#firstNum");
const secondInp = document.querySelector("#secondNum");
const output = document.querySelector("#output");


// Buttons here
let plusBtn = document.querySelector("#plus");
let minBtn = document.querySelector("#minus");
let mulBtn = document.querySelector("#mul");
let divBtn = document.querySelector("#div");
let perBtn = document.querySelector("#prcntge");



// All Operational Functions

function addNum() {
  const fstNum = Number(firstInp.value);
  const secNum = Number(secondInp.value);
  const sum = fstNum + secNum;
  return output.value = sum;
}


function subNum() {
  const fstNum = Number(firstInp.value);
  const secNum = Number(secondInp.value);
  const sum = fstNum - secNum;
  return output.value = sum;
}


function mulNum() {
  const fstNum = Number(firstInp.value);
  const secNum = Number(secondInp.value);
  const sum = fstNum * secNum;
  return output.value = sum;
}


function divNum() {
  const fstNum = Number(firstInp.value);
  const secNum = Number(secondInp.value);
  let sum = 0;
  if(fstNum > secNum){
    sum = fstNum / secNum;
  } else {
    sum = secNum / fstNum;
  }
   
    return output.value = sum;
}

function perNum() {
  const fstNum = Number(firstInp.value);
  const secNum = Number(secondInp.value);
  const sum = (fstNum + secNum) / 100;
  return output.value = sum;
}

// Adding EventListeners
plusBtn.addEventListener("click", addNum);
minBtn.addEventListener("click", subNum);
mulBtn.addEventListener("click", mulNum);
divBtn.addEventListener("click", divNum);
perBtn.addEventListener("click", perNum);
