document.getElementById("sendButton").addEventListener("click", validateForm)

function validateForm() {

    if (document.getElementById("name").value != "" && document.getElementById("email").value != "") {
        alert("Prontinho! Agora você receberá as novidades por email =) ")

    } else {
        alert("Por favor, preencha os campos nome e email!")
    }
}