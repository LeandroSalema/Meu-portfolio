function mostrar(id) {
    const secoes = document.querySelectorAll("main section");
    secoes.forEach(secao => {
    secao.classList.remove("visivel");
    });
      document.getElementById(id).classList.add("visivel");
}


function enviarMensagem(event) {
    event.preventDefault(); 
    alert("Mensagem enviada com sucesso! 😊");
    event.target.reset(); 
}
