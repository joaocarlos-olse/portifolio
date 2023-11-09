function abreFechaMenu(){
    let menu_responsivo = document.getElementById("menu-responivo");
    
    if(menu_completo == "none"){
        menu_completo.style.display = "flex";
        menu_responsivo.style.display = "none";
    }
    else{
        menu_completo.style.display = "none";
        menu_responsivo.style.display = "flex";
    }
}