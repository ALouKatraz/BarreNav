function menu(){
    if(document.getElementById("barre").style.display == "block"){
        document.getElementById("barre").style.display = "none";
    }
    else {
        document.getElementById("barre").style.display = "block"
    }
}

document.getElementById("affiche").addEventListener("click", menu)