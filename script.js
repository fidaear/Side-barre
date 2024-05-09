let op=document.getElementById("ope");
let cls=document.getElementById("cls");
let conto=document.querySelector(".containner");
let forme=document.querySelector(".container");
cls.onclick=function(){
    conto.classList.add("hide");
    this.classList.add("hide");
    forme.classList.remove("hide");
    op.classList.remove("hide");
}
op.onclick=function(){
    cls.classList.remove("hide");
    this.classList.add("hide");
    conto.classList.remove("hide");
    forme.classList.remove("hide");
}
window.onload=function(){
text.value="ENSIAS";
}

let text=document.getElementById("txt");
let btn=document.getElementById("Btn");
btn.onclick=function(){
    btn.style.backgroundColor="red"
}
