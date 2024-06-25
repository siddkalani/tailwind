document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
})

const handleSubmit=()=>{
    // adding name
    const name = document.getElementById("name").value;
    const newName = document.createElement("div")
    newName.textContent = name;

    //adding title
    const title = document.getElementById("title").value;

    const newTitle = document.createElement("div")
    newTitle.textContent = title;

    // require name and title with clear value on submit
    title ? document.getElementById("demo").appendChild(newName):alert("Please enter title")
    document.getElementById("name").value = ""

    name?document.getElementById("demo2").appendChild(newTitle):alert("Please enter name")
    document.getElementById("title").value = ""

    //adding image

    const newImage = document.getElementById("image")
    //delete img
    const createImage = document.createElement("img")
    createImage.src = "delete.svg"
    createImage.setAttribute("class" ,"cursor-pointer")
    //edit image
    const editImage = document.createElement("img")
    editImage.src = "edit.svg"
    editImage.setAttribute("class" ,"cursor-pointer")
    //append image
    name && title ? newImage.appendChild(createImage) : null
    name && title ? newImage.appendChild(editImage) : null

    // NewImage.src = "delete.svg";
    // NewImage.appendChild(image)

    //delete function
    createImage.addEventListener("click",()=>{
        createImage.remove()
        newName.remove()
        newTitle.remove()
    })
    //edit function
    editImage.addEventListener("click",()=>{
        
    })
}

