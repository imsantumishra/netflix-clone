
let icons = document.getElementById("icon");

icons.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icons.src="image/moon.png";
    } else {
        icons.src="image/sun.png";
    }
};

let popup = document.getElementById("popupbox");
function showPop(){
    setTimeout(() => {
        popup.style.display="block";
    }, 2000)
}

function closeModel(){
    popup.style.display="none";
}