let boxicon = document.querySelector(".boxicon");
let share = document.querySelector(".share");
let click = true;
boxicon.addEventListener("click", (e) => {
if (click){
    share.style.display = "flex";
}else{
    share.style.display="none"
}
click = !click;
});
