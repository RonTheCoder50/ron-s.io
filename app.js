
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

    //dark mode functionality --->
    let darkToggle = document.querySelectorAll("#drk");
    let body = document.querySelector("body");

    for(let drk of darkToggle) {
        drk.addEventListener("click", () => {
            body.classList.toggle("isDark");

            let nav = document.querySelector("#nav");
            let img = document.querySelector("#imgg");
            let calci = document.querySelector("#calc");

            if(body.classList.contains("isDark")) {
                let darks = document.querySelectorAll(".dark_");

                for(let dark of darks) {
                    dark.style.background = "linear-gradient(to bottom, rgb(0, 0, 0), rgb(50, 50, 50))";
                    dark.style.color = "white";
                }
                
                
                nav.style.borderBottom = "1px solid silver";
                img.classList.remove("opacity-90", "shadow-2xl", "shadow-amber-50");
                
                calci.style.background = "#2c2c2c";
                calci.style.color = "white";
            } else {
                let darks = document.querySelectorAll(".dark_");
                for(let dark of darks) {
                    //bg
                    let body = document.querySelector("body");
                    body.style.background = "rgba(209, 213, 219, 1)";

                    //navbar
                    nav.style.borderBottom = "none";

                    //nav-img
                    img.classList.add("opacity-90", "shadow-2xl", "shadow-amber-50");

                    //hero-sec
                    let hero = document.querySelector("#hro");
                    hero.style.background = "rgba(254, 243, 199, 1)";

                    //hero-sec text
                    let heroCh = document.querySelector("#hro-ch");
                    heroCh.style.background = "rgba(34, 211, 238, 0.6)";
                    heroCh.style.color = "rgba(75, 85, 99, 1)";

                    //drop
                    let drop = document.querySelector("#drop");
                    drop.style.background = "rgba(255, 255, 255, 0.6)";
                    drop.style.color = "black";

                    //footer
                    let foot = document.querySelector("#foot");
                    foot.style.background = "rgba(0,0,0,0.8)"

                }
            }
        });

    }
    
});
