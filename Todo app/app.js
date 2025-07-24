
window.onload = function() {

    let inp =  document.querySelector("#inpt");
    let btn = document.querySelector("button");

    let ul1 = document.querySelector("#ul1");
    let ul2 = document.querySelector("#ul2");


    inp.addEventListener("keypress", function(event) {
        console.log(event);
    if (event.key === "Enter") {
        console.log("submitted");
        submitInput();
    }
    });

    btn.addEventListener("click", submitInput);

    function submitInput() {
        btn.addEventListener("click", function(){
        if(inp.value !== '') {
            //li of ul
            let task = document.createElement("li");
            task.innerText = inp.value;
            task.style.fontSize = "24px";
            task.style.fontWeight = "700";

            //check complete
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.marginRight = "10px";

            checkbox.addEventListener("click", function(){
            
                if(checkbox.checked) {
                    task.style.textDecoration = "line-through";
                    task.style.color = "gray";
                    delBtn.innerText = "";
                    ul2.appendChild(task);

                    checkbox.style.display = "none";
                } else {
                    task.style.textDecoration = "none";
                    task.style.color = "";
                }
                
            });
            task.prepend(checkbox);

            //delete button
            let delBtn = document.createElement("button");
            delBtn.classList.add("delete");
            delBtn.innerText = "Delete";
            delBtn.style.color = "black";
            delBtn.style.marginLeft = "10px";

            // ul adding task
            task.appendChild(delBtn);
            ul1.appendChild(task);
            inp.value = "";

            // //delete
            // delBtn.addEventListener("click", function(){
            //     task.remove();
            // });
        }
    });
    }



    //Event Delegation 
    ul1.addEventListener("click", function(event){
        if(event.target.nodeName == "BUTTON") {
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("task deleted successfully !");
        }
    });

}


