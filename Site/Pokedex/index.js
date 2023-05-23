const botaoAlterarTema = document.getElementById("botao_alterar_tema");
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem_botao")

botao_alterar_tema.addEventListener("click", () => {
const modoEscuroAtivo = body.classList.contains("modo-escuro")
body.classList.toggle("modo-escuro");
div_msg.style.color = "white"


    if(modoEscuroAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")
    div_msg.style.color = "black"

} 
    
    else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")
}

   
});