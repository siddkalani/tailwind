document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
})

let editGlobalName = null;
let editGlobalTitle = null;

const handleSubmit=()=>{
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;


    if(editGlobalName && editGlobalTitle){
        editGlobalName.textContent = name
        editGlobalTitle.textContent = title

        document.getElementById("name").value = "";
        document.getElementById("title").value = "";
        editGlobalName = null;
        editGlobalTitle = null;

    } else{

    // adding name
    
    const newName = document.createElement("div")
    newName.textContent = name;

    //adding title
    

    const newTitle = document.createElement("div")
    newTitle.textContent = title;

    // require name and title with clear value on submit
    title ? document.getElementById("demo").appendChild(newName):alert("Please enter title")
    document.getElementById("name").value = ""

    name?document.getElementById("demo2").appendChild(newTitle):alert("Please enter name")
    document.getElementById("title").value = ""

    //adding image
    const imageDiv = document.createElement("div")
    const newImage = document.getElementById("image")
    //delete img
    const createImage = document.createElement("img")
    createImage.src = "delete.svg"
    createImage.setAttribute("class" ,"cursor-pointer")
    //edit image
    const editImage = document.createElement("img")
    editImage.src = "edit.svg"
    editImage.setAttribute("class" ,"cursor-pointer")
    imageDiv.setAttribute("class","flex")
    //append image
    name && title ? imageDiv.appendChild(createImage) : null
    name && title ? imageDiv.appendChild(editImage) : null
    newImage.appendChild(imageDiv)
    

    // NewImage.src = "delete.svg";
    // NewImage.appendChild(image)

    //delete function
    createImage.addEventListener("click",()=>{
        createImage.remove()
        newName.remove()
        newTitle.remove()
        editImage.remove()
    })
    //edit function
    editImage.addEventListener("click",()=>{
      console.log(newTitle.innerHTML)

      document.getElementById("title").value = newTitle.innerHTML
      document.getElementById("name").value = newName.innerHTML

       editGlobalName = newName;
       editGlobalTitle = newTitle;
    })

}
}

