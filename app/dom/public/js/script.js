function AddCart(id, cardID){
    document.getElementById(id).innerText = 'Agregado al Carrito';
    document.getElementById(cardID).className = "card card-shadow"
}