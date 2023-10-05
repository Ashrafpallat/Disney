// var menuIcon = document.querySelector(".hided_div");
// var header = document.getElementsByClassName(".hided_div");

// menuIcon.onclick = function(){
//     header.classList.toggle("hided_div1");

// }
// var icon= document.getElementById("icon");
// icon.onclick= function(){
//     document.body.classList.toggle("dark_theme")
// }
const totop = document.querySelector(".to_top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset >100){
        totop.classList.add("active");
    }
        else{
            totop.classList.remove("active");
    }
})