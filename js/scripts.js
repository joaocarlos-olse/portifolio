function abreFechaMenu(){
    var itens_menu = document.getElementById("itens-menu");
    var item_menu = document.getElementsByClassName("item-menu");
    var icone_menu = document.getElementById("abreFechaMenu");

    for (var i = 0; i < item_menu.length; i++) {
        item_menu[i].classList.toggle("item-menu-block");
    }

    icone_menu.classList.toggle("bi-list");
    icone_menu.classList.toggle("bi-x-lg");

    itens_menu.classList.toggle("animacao-menu-responsivo");
}