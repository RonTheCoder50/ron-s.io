
//hamburger

window.addEventListener("DOMContentLoaded", () => {

    //hamburger for smaller screens --->

    let bar = document.querySelector("#bar");
    let sideBar = document.getElementById("sdBar");

    bar.addEventListener("click", () => {
        
        //change symbol
        changeIt();

        sideBar.classList.toggle("hidden");
    });

    //
    let lis = document.querySelectorAll(".s-li");
    
    for(let li of lis) {
        li.addEventListener("click", () => {
            sideBar.classList.add("hidden");
            changeIt();
        });
    }

    function changeIt() {
        if(bar.classList.contains("fa-bars")) {
            bar.classList.replace("fa-bars", "fa-xmark");
        } else {
            bar.classList.replace("fa-xmark", "fa-bars");
        }
    }


    //dropdown --->
    let drops = document.getElementById("drop");
    let dropDown = document.getElementById("dropdown");

    drops.addEventListener("click", () => {
        console.log("drop was clicked");
        dropDown.classList.toggle("hidden");
    });

    //when we click on dropdown any item then it load and also dropdown closes
    let dropLis = document.querySelectorAll(".drop-li");
    for(let drp of dropLis) {
        drp.addEventListener("click", () => {
            setTimeout(() => {
                dropDown.classList.toggle("hidden");
            }, 100);
        });
    }

});
