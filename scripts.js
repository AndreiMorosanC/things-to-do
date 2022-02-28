const list = document.getElementById("list");
const txt = document.getElementById("txt");
const add = document.getElementById("add");
const delet = document.getElementById("delete");
const parag = document.getElementsByClassName("thinks")

add.addEventListener("click", ()=> {
    let content = document.createElement("p");
    
    content.innerHTML = txt.value
    content.setAttribute("class", "thinks");
    
    list.append(content);
})
delet.addEventListener("click", () =>{
    list.innerHTML = ""
})

parag.addEventListener("click", () =>{
    console.log("qwe")
})

