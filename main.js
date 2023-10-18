

// When the user clicks, open the popup
function hideMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("hide");
}
oldId = "";
// When the user clicks, show the content
function show($id){
          if(oldId != ""){
              let old = document.getElementById(oldId);
              old.classList.toggle("show");
          }
          let selector = document.getElementById($id);
          selector.classList.toggle("show");
          oldId = $id;
        }


ImgId = "";
function select($id){
    if(ImgId != ""){
      let Img = document.getElementById(ImgId);
      Img.classList.toggle("selected");
    }
    let selector = document.getElementById($id);
    selector.classList.toggle("selected");
    ImgId = $id;
    }

function showCateg($id){
    let categ = document.getElementById($id);
    categ.classList.toggle("open");
}

function switchArrow($id){
    var arrow = document.getElementById($id);
    if(arrow.style.transform == "rotate(90deg)"){
        arrow.style.transform="rotate(0deg)";
    }
    else{
        arrow.style.transform="rotate(90deg)";
    }
}

window.onload = function(){
    show("emptyBox");
}

let numA = 0;
let oldA = 0;

function prev(){
    if (annecdotes[oldA] != ""){
        document.getElementById(annecdotes[oldA]).classList.toggle("show");
    }
    numA --;
    if (numA < 0){
        numA = 0;
    }
    document.getElementById(annecdotes[numA]).classList.toggle("show");
    oldA = numA;
}

function next(){
    if (annecdotes[oldA] != ""){
        document.getElementById(annecdotes[oldA]).classList.toggle("show");
    }
    numA ++;
    if (numA > annecdotes.length-1){
        numA = annecdotes.length-1;
    }
    document.getElementById(annecdotes[numA]).classList.toggle("show");
    oldA = numA;
}
