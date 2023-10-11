const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const btn = document.querySelector("button")

// ADD BUTTON & INPUT BOX FUNCTION
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
    saveData();
})

// MAKE TASK CHECKED, UNCHECKED & REMOVE
listContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData();
    }
}, false)


// SAVE EVERY CHANGES IN LOCALSTORAGE
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();