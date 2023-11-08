function mostrarFechar(){
    console.log("click");
    let botao = document.getElementById("menu-responivo");
    let itens_menu = document.getElementsByClassName("item-menu");
    
    if(botao.style.display == none){
        itens_menu.style.display = block;
    }
    else{
        itens_menu.style.display = none;
    }
}