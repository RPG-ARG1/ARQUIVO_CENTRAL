function verificarChave() {

    const chave = document.getElementById("chave").value;

    if (chave === "ARQUIVO047") {

        window.location.href = "arquivo.html";

    } 
    
    else if (chave === "SANTAMARIA") {

        window.location.href = "mapa.html";

    } 
    
    else if (chave === "CORDEIRO") {

        window.location.href = "terminal.html";

    } 
    
    else {

        document.getElementById("mensagem").innerText =
            "ERRO: CHAVE INVÁLIDA.";

    }
}