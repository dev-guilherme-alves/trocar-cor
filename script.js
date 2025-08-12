
function trocarCor(cor) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = cor;
}

function corAleatoria() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    //return `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function corPersonalizada() {
    const corInput = document.querySelector('.input-cor').value
    
    trocarCor(corInput)
}

function escolherImagem(imagem) {
    const reader = new FileReader();

    reader.onload = function(evento) {
        urlImagem = evento.target.result;

        document.body.style.backgroundImage = `url(${urlImagem})`;
    }

    reader.readAsDataURL(imagem);

}