let editGlobalId = null;

const modal = document.getElementById("modal");

const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;

    if (!name || !title || !date) {
        alert("Please fill out all fields.");
        return;
    }

    modal.classList.add("hidden");

    const entry = { id: Date.now(), name, title, date };

    if (editGlobalId) {
        updateEntry(editGlobalId, entry);
        editGlobalId = null;
    } else {
        saveEntry(entry);
    }

    document.getElementById("name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";

    renderEntries();
};

const saveEntry = (entry) => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
};

const updateEntry = (id, updatedEntry) => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = entries.map(entry => entry.id === id ? updatedEntry : entry);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
};

const deleteEntry = (id) => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = entries.filter(entry => entry.id !== id);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
};

const renderEntries = () => {
    const blogList = document.getElementById("blogList");
    blogList.innerHTML = "";

    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.forEach(entry => {
        const newSection = document.createElement("section");
        newSection.classList.add("bg-white", "p-4", "rounded-md", "shadow-md","h-3/4","w-3/4","overflow-auto");

        const newName = document.createElement("div");
        newName.textContent = entry.name;

        const newTitle = document.createElement("div");
        newTitle.textContent = entry.title;

        const newDate = document.createElement("div");
        newDate.textContent = entry.date;

        newSection.appendChild(newName);
        newSection.appendChild(newTitle);
        newSection.appendChild(newDate);

        newName.classList.add("overflow-auto","w-3/4");
        newTitle.classList.add("overflow-auto","w-3/4");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("flex", "gap-2");

        const deleteImage = document.createElement("img");
        deleteImage.src = "delete.svg";
        deleteImage.classList.add("cursor-pointer");
        imageDiv.appendChild(deleteImage);

        const editImage = document.createElement("img");
        editImage.src = "edit.svg";
        editImage.classList.add("cursor-pointer");
        imageDiv.appendChild(editImage);

        newSection.appendChild(imageDiv);

        blogList.appendChild(newSection);

        deleteImage.addEventListener("click", () => {
            deleteEntry(entry.id);
            renderEntries();
        });
        editImage.addEventListener("click", () => {
            modal.classList.remove("hidden");

            document.getElementById("name").value = entry.name;
            document.getElementById("title").value = entry.title;
            document.getElementById("date").value = entry.date;

            editGlobalId = entry.id;
        });
    });
};

document.addEventListener("DOMContentLoaded", renderEntries);

function handleClick() {
    modal.classList.remove("hidden");
    document.querySelector("strong").classList.remove("hidden");
}
