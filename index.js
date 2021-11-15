
let countEl = document.getElementById("count")

console.log(countEl)

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}
let saveEl = document.getElementById("save")
function save(){
    let temp = count
    let dash = " - "
    saveEl.innerText+=" "+temp+" "+dash
    count = 0
    countEl.innerText = count
}


