//document.getElementById("count-el").innerText = 5

let count = 0
function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
}

function save() {
    countEl = document.getElementById("count-el")
    console.log(count)
}