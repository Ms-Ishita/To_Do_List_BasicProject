const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");

function toggleEmptyState() {
    if (list.children.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.onclick = () => {
        li.remove();
        toggleEmptyState();
    };

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
    toggleEmptyState();
});

// Initial check
toggleEmptyState();
