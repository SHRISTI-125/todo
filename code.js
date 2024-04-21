var input = document.getElementById("input-box");
var list_container = document.getElementById("list");

function add_task() {
    if (input.value === '') {
        alert("Write here, because it is empty!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_container.appendChild(li);

        let editButton = document.createElement("span");
        editButton.innerHTML = "&#9998;";
        editButton.className = "edit";
        li.appendChild(editButton);
        
        let span = document.createElement("span");
        span.innerHTML = "&#8212";// "\u00D7";
        li.appendChild(span);
    }
    input.value = "";
    save();
}

list_container.addEventListener("click", function (e) {
    console.log("Click event", e.target);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.classList.contains("edit")) {
        let task = e.target.parentElement;
        let newText = prompt("Enter new text", task.firstChild.textContent);
        if (newText !== null) {
            task.firstChild.textContent = newText;
            save();
        }
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function save() {
    localStorage.setItem("data", list_container.innerHTML);
    console.log("Saved");
}

function display_task() {
    list_container.innerHTML = localStorage.getItem("data");
    console.log("Displayed tasks");
}

display_task();
