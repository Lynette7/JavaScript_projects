//document.getElementById("count-el").innerText = 5
//textContent instead of innerText because the former includes hidden content e.g spaces & is less computationally
//expensive

let countEl = getElementById("count-el")
let saveEl = getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let entry = count + " - "
    saveEl.textContent += entry
    console.log(count)
    countEl.textContent = 0
    count = 0
}