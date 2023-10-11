const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    if (inputBox.value === '') {
        alert("Write something first")
    }
    else {
        let list = document.createElement("li")
        list.innerHTML = inputBox.value
        listContainer.appendChild(list)
        let cross = document.createElement("span")
        cross.innerHTML = "\u00d7"
        list.appendChild(cross)
    }
    inputBox.value = '';
})