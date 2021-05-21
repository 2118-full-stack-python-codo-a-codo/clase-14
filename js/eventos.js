let myButton = document.getElementById("idFooter");

myButton.hidden = false;

function hideShow(){
    myButton.hidden = !myButton.hidden;
}

function saludar() {
    alert("Hola");
}

function contextMenu(evento) {
    console.log(evento);
    alert("No podes hacer click derecho");
    console.dir(document.body)

    document.location = "https://www.google.com";
}